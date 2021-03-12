import * as React from 'react';

import { Gql } from "module/api";

function ApiRestPage () {
  const [event, setEvent] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setEvent(null);
        setLoading(true);

        const gqlService = new Gql();

        const response = await gqlService.gqlApi({
          query: `
            query {
              event(id: "5879ad8f6672e70036d58ba5") {
                title
                address
                currency
                host {
                  firstName
                }
                timeSlots {
                  totalCount
                  nodes {
                    startAt
                  }
                }
              }
            }
          `
        })
        console.log(response)
        setEvent(response.data); 
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!event) return <div>No data...</div>;
  return (
    <div className="api-gql-page">
      <h3>Test space</h3>
      {event.title}
    </div>
  )
}

export default ApiRestPage;