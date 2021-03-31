import {put, all, fork, takeEvery} from "redux-saga/effects";
import {signInSuccess, signInError} from "../actions/AuthActions"
import {SIGN_IN_SUCCESS} from "../constants/Auth"

export function* customerList() {
    yield takeEvery(SIGN_IN_SUCCESS, function* (payload) {
        try {
            // const data = yield call(fetchCustomerData, payload.keyword);
            const data = {
                username: "pamu@gmail.com",
                password: "1234"
            }
            yield put(signInSuccess(data));
        } catch (err) {
            yield put(signInError(err));
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(customerList),
    ]);
}