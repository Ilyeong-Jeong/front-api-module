import * as React from 'react';

import gqlApiService from "service/gqlApi"

function GqlApiPage () {
  const [users, setUsers]     = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError]     = React.useState(null);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUsers(null);
        setLoading(true);
        setError(null);

        const query = 'users'

        const response = await gqlApiService.gqlApi({
          query: `
            query {
              ${query} {
                id
                name
              }
            }
          `
        })

        setUsers(response[query]); 
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return <div>No data...</div>;
  return (
    <div className="api-gql-page">
      <h3>GQL Test space</h3>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.name} ({user.id})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GqlApiPage;