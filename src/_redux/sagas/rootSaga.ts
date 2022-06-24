import { all, fork } from "redux-saga/effects";
import postsSaga from "./postsSaga/postSaga"

export function* rootSaga() {
  yield all([fork(postsSaga)]);
}
