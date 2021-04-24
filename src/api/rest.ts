import restApiService from 'service/restApi';

export async function getUsers() {
  const users = await restApiService.restApi({
    url   : "api/users",
    method: "get"
  });

  return users.data;
}