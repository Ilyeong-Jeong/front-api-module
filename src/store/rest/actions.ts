import { createAsyncAction } from 'typesafe-actions';
import { User } from 'models/user';
import { AxiosError } from 'axios';

export const GET_USERS = 'rest/GET_USERS';
export const GET_USERS_SUCCESS = 'rest/GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'rest/GET_USERS_ERROR';

export const getUsersAsync = createAsyncAction(
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
)<undefined, User[], AxiosError>();