import { combineReducers } from 'redux';

import { restSaga } from './rest';
import rest from './rest/reducer';

import { gqlSaga } from './gql';
import gql from './gql/reducer';

import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  rest,
  gql,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([restSaga(), gqlSaga()]);
}
