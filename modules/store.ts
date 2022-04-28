import { applyMiddleware, combineReducers, compose, Middleware, Store } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware, { Task } from "redux-saga";
import { userSlice } from "./user/user";

const reducers = {
  userReducer: userSlice.reducer,
  // 리듀서 추가
}

const rootReducer = combineReducers(reducers);

// ref: https://github.com/vercel/next.js/tree/canary/examples/with-redux-saga
// ref: https://github.com/kirill-konshin/next-redux-wrapper#usage-with-redux-saga
// ref: https://github.com/Tinkerbell-Green/need-compliments/pull/6/files
export interface SagaStore extends Store {
  sagaTask?: Task;
}

function* rootSaga() {
  // yield all([사가()]);
}

const bindMiddleware = (middlewares: Middleware<any, any, any>[]) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension")
    return composeWithDevTools(applyMiddleware(...middlewares))
  }
  return applyMiddleware(...middlewares)
}

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware, logger])) as SagaStore
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true })

export type RootState = ReturnType<typeof rootReducer>;