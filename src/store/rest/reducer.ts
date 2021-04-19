import { createReducer } from 'typesafe-actions';
import { RestState, RestAction } from './types';
import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR } from './actions';

const initialState: RestState = {
  users: {
    loading: false,
    error: null,
    data: null
  }
};

const rest = createReducer<RestState, RestAction>(initialState, {
  [GET_USERS]: (state) => ({
    ...state,
    users: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [GET_USERS_SUCCESS]: (state, action) => ({
    ...state,
    users: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [GET_USERS_ERROR]: (state, action) => ({
    ...state,
    users: {
      loading: false,
      error: action.payload,
      data: null
    }
  })
});

export default rest;