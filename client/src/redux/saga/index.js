import { all } from "redux-saga/effects";
import { songSaga } from "./songSaga";
import { statSaga } from "./statSaga";

export function* rootSaga() {
  yield all([songSaga(), statSaga()]);
}
