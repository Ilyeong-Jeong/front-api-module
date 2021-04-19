import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getUsersThunk } from 'store/rest';

function ApiRestPage () {
  const { data, loading, error } = useSelector((state: RootState) => state.rest.users);
  const dispatch = useDispatch();

  const getUsers = () => {
    dispatch(getUsersThunk());
  };

  getUsers();

  return (
    <div className="api-rest-page">
      <h3>REST API Test space</h3>
      {loading && <div>로딩중..</div>}
      {error && <div>에러가 발생했습니다.</div>}
      {data && 
        <ul>
          {data.map((user: any) => (
            <li key={user.id}>
              {user.username} ({user.name})
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default ApiRestPage;