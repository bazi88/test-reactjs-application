import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { accountSliceActions as actions } from '.';
import { getAccountFromUser } from 'services/handleRequest';
// import history from 'utils/history';
import { Accounts } from 'models/response/Account';

function* getAccount(data) {
  console.log('🚀 ~ file: saga.ts ~ line 8 ~ function*getAccount ~ data', data);
  try {
    const response: Accounts = yield call(() =>
      getAccountFromUser(data.payload.id),
    );
    yield put(actions.getAccountSuccess(response));
  } catch (error) {
    yield put(actions.getAccountFail(error));
  }
}

export function* accountSliceSaga() {
  yield takeLatest(actions.getAccount.type, getAccount);
}
