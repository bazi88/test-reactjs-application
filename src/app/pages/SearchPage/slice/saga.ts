import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { searchSliceActions as actions } from '.';
import { getDetailsUser } from 'services/handleRequest';
// import history from 'utils/history';
import { User } from 'models/response/User';

function* handleGetDetailsAccount(payload) {
  try {
    const data = payload.payload;
    const response: User = yield call(() => getDetailsUser(data));
    yield put(actions.getDetailsAccountsSuccess(response));
    // history.push(`/home/${data.idSearch}`);
  } catch (error) {
    yield put(actions.getDetailsAccountsFailed(error));
  }
}

export function* searchSliceSaga() {
  yield takeLatest(actions.getDetailsAccounts.type, handleGetDetailsAccount);
}
