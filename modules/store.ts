import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {userSlice} from "./user/user";

const sagaMiddleware = createSagaMiddleware();

const reducers = {
  user: userSlice.reducer,
  // 리듀서 추가
}

export const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
});

export function* rootSaga() {
  // yield all([사가()]);
}

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;