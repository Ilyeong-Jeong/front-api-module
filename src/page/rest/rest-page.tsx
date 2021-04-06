import * as React from 'react';

import restApiService from "service/rest-api"

function ApiRestPage () {
  const [users, setUsers]     = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError]     = React.useState(null);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUsers(null);
        setLoading(true);
        setError(null);

        const response = await restApiService.restApi({
          url   : "users",
          method: "get"
        })

        setUsers(response); 
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
    <div className="api-rest-page">
      <h3>REST API Test space</h3>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ApiRestPage;