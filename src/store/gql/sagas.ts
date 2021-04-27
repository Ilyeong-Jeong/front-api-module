// import { put, takeEvery } from 'redux-saga/effects';
import * as Effects from "redux-saga/effects";

const call: any = Effects.call;

import { getUsersAsync, GET_USERS } from './actions';

import { Users } from "models/gql-types";
import { getUsers } from 'api/gql';

function* getUsersSaga(action: ReturnType<typeof getUsersAsync.request>) {
  try {
    const users: Users[] = yield call(getUsers, action.payload);
    yield Effects.put(getUsersAsync.success(users));
  } catch (e) {
    yield Effects.put(getUsersAsync.failure(e));
  }
}

export function* gqlSaga() {
  yield Effects.takeEvery(GET_USERS, getUsersSaga);
}