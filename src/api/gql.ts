import gqlApiService from "service/gql-api";

const query = 'users'

export async function getUsers() {
  const response = await gqlApiService.gqlApi({
    query: `
      query {
        ${query} {
          id
          name
          timestamp
        }
      }
    `
  });

  return response[query];
}