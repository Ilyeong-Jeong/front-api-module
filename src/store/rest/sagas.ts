import { put, takeEvery } from 'redux-saga/effects';
import * as Effects from "redux-saga/effects";

const call: any = Effects.call;

import { getUsersAsync, GET_USERS } from './actions';

import { User } from 'models/user';
import { getUsers } from 'api/rest';

function* getUsersSaga(action: ReturnType<typeof getUsersAsync.request>) {
  try {
    const users: User[] = yield call(getUsers, action.payload);
    yield put(getUsersAsync.success(users));
  } catch (e) {
    yield put(getUsersAsync.failure(e));
  }
}

export function* restSaga() {
  yield takeEvery(GET_USERS, getUsersSaga);
}