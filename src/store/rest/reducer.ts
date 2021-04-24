import { ActionType, createReducer } from 'typesafe-actions';

import * as actions from './actions';

import { AsyncState, asyncState, createAsyncReducer, transformToArray } from 'modules/reducer-utils';
import { User } from 'models/user';

export type RestAction = ActionType<typeof actions>;

export type RestState = {
  users: AsyncState<User[], Error>;
};

const initialState: RestState = {
  users: asyncState.init()
};

const rest = createReducer<RestState, RestAction>(initialState).handleAction(
  transformToArray(actions.getUsersAsync),
  createAsyncReducer(actions.getUsersAsync, 'users')
);

export default rest;