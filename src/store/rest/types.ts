import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { User } from 'models/user';

export type RestAction = ActionType<typeof actions>;

export type RestState = {
  users: {
    loading: boolean;
    error: Error | null;
    data: User[] | null;
  };
};