import { all } from "redux-saga/effects";

import AuthSaga from "../sagas/AuthSagas"


export default function* rootSaga(getState) {
  yield all([
    AuthSaga(),
   ]);
 }
