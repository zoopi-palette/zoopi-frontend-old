import {configureStore, Store} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import {logger} from "redux-logger";
import createSagaMiddleware, {Task} from "redux-saga";
import userReducer from "./user/user";

// ref: https://github.com/vercel/next.js/tree/canary/examples/with-redux-saga
// ref: https://github.com/kirill-konshin/next-redux-wrapper#usage-with-redux-saga
// ref: https://github.com/Tinkerbell-Green/need-compliments/pull/6/files
export interface SagaStore extends Store {
  sagaTask?: Task;
}

function* rootSaga() {
  // yield all([사가()]);
}

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store: SagaStore = configureStore({
    reducer: {
      user: userReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: [sagaMiddleware, logger],
  });
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store
}

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore["getState"]>;
export const wrapper = createWrapper<RootStore>(makeStore, {debug: true});