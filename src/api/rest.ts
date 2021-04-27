import restApiService from 'service/rest-api';

export async function getUsers() {
  const response = await restApiService.restApi({
    url   : "api/users",
    method: "get"
  });

  return response.data;
}