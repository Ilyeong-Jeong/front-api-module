import { ActionType, createReducer } from 'typesafe-actions';

import * as actions from './actions';

import { AsyncState, asyncState, createAsyncReducer, transformToArray } from 'modules/reducer-utils';
import { Users } from "models/gql-types";

export type GqlAction = ActionType<typeof actions>;

export type GqlState = {
  users: AsyncState<Users[], Error>;
};

const initialState: GqlState = {
  users: asyncState.init()
};

const gql = createReducer<GqlState, GqlAction>(initialState).handleAction(
  transformToArray(actions.getUsersAsync),
  createAsyncReducer(actions.getUsersAsync, 'users')
);

export default gql;