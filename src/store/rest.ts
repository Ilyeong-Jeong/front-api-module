import { Dispatch } from 'redux';

import { User } from 'models/user';
import restApiService from 'service/rest-api';

// Action Types
const GET_USERS = 'GET_USERS';

// Action Creators
export type UserAction =
  | ReturnType<typeof getUsers>;

export const getUsers = (users: User[]) => ({
  type: GET_USERS,
  payload: users
});

// Initial State
export interface UserList {
  users: User[];
}

const initialState: UserList = {
  users: [],
};

// Reducer
const reducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};

// Reducer Functions
export const applyGetUsers = () => {
  return function (dispatch: Dispatch<UserAction>) {
    restApiService.restApi({
      url   : "users",
      method: "get"
    })
    .then((users) => {
      dispatch(getUsers(users));
      return users;
    })
  }
};

export default reducer;