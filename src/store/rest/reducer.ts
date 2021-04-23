import { ActionType, createReducer } from 'typesafe-actions';

import * as actions from './actions';
import { User } from 'models/user';

export type RestAction = ActionType<typeof actions>;

export type RestState = {
  users: {
    loading: boolean;
    error: Error | null;
    data: User[] | null;
  };
};

const initialState: RestState = {
  users: {
    loading: false,
    error: null,
    data: null
  }
};

const rest = createReducer<RestState, RestAction>(initialState, {
  [actions.GET_USERS]: (state) => ({
    ...state,
    users: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [actions.GET_USERS_SUCCESS]: (state, action) => ({
    ...state,
    users: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [actions.GET_USERS_ERROR]: (state, action) => ({
    ...state,
    users: {
      loading: false,
      error: action.payload,
      data: null
    }
  })
});

export default rest;