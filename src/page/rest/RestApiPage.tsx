import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getUsersAsync } from 'store/rest';
import { User } from 'models/user';

function RestApiPage () {
  const { data, loading, error } = useSelector((state: RootState) => state.rest.users);
  const dispatch = useDispatch();

  const getUsers = () => {
    React.useEffect(() => {
      dispatch(getUsersAsync.request(''));
    }, [])
  };

  getUsers();

  return (
    <div className="api-rest-page">
      <h3>REST API Test space</h3>
      {loading && <div>로딩중..</div>}
      {error && <div>에러가 발생했습니다.</div>}
      {data && 
        <ul>
          {data.map((user: User) => (
            <li key={user.id}>
              ({user.id}) {user.first_name} {user.last_name}
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default RestApiPage;