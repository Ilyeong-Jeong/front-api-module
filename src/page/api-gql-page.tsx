import * as React from 'react';

import { Gql } from "module/api";

function ApiRestPage () {
  const [ids, setIds] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setIds(null);
        setLoading(true);

        const gqlService = new Gql();

        const query = 'capsulesPast'

        const response = await gqlService.gqlApi({
          query: `
            query {
              ${query} {
                id
              }
            }
          `
        })

        setIds(response[query]); 
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!ids) return <div>No data...</div>;
  return (
    <div className="api-gql-page">
      <h3>Test space</h3>
      <ul>
        {ids.map((v: any) => (
          <li key={v.id}>
            {v.id}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ApiRestPage;