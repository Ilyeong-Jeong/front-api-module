import { createAsyncAction } from 'typesafe-actions';
import { Users } from "models/gql-types";
import { AxiosError } from 'axios';

export const GET_USERS = 'gql/GET_USERS';
export const GET_USERS_SUCCESS = 'gql/GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'gql/GET_USERS_ERROR';

export const getUsersAsync = createAsyncAction(
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
)<string, Users[], AxiosError>();