import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { loginPageActions as actions } from '.';
import { loginRequest } from 'services/handleRequest';
import history from 'utils/history';

export interface Response {
  token: String;
}

function* loginSaga(payload) {
  try {
    const response: Response = yield call(() => loginRequest(payload));
    yield put(actions.loginSuccess(response));
    history.push('/home');
  } catch (e) {
    yield put(actions.loginFailure(e));
  }
}

export function* loginPageSaga() {
  yield takeLatest(actions.login.type, loginSaga);
}
