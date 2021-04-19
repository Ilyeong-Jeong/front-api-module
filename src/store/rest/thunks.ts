import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { RestAction } from './types';
import { getUsers } from 'api/rest';
import { getUsersAsync } from './actions';
import { User } from 'models/user';

export function getUsersThunk(): ThunkAction<Promise<void>, RootState, null, RestAction> {
  return async dispatch => {
    const { request, success, failure } = getUsersAsync;
    dispatch(request());
    try {
      const users: User[] = await getUsers();
      dispatch(success(users));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}