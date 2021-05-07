import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getUsersAsync } from 'store/gql';
import { Users } from "models/gql-types";

function GqlApiPage () {
  const { data, loading, error } = useSelector((state: RootState) => state.gql.users);
  const dispatch = useDispatch();

  const getUsers = () => {
    React.useEffect(() => {
      dispatch(getUsersAsync.request(''));
    }, [])
  };

  getUsers();

  return (
    <div className="api-gql-page">
      <h3>GQL Test space</h3>
      {loading && <div>로딩중..</div>}
      {error && <div>에러가 발생했습니다.</div>}
      {data && 
        <ul>
          {data.map((user: Users) => (
            <li key={user.id}>
              ({user.id}) {user.name} {user.timestamp}
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default GqlApiPage;