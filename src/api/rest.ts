import restApiService from 'service/rest-api';

export async function getUsers() {
  const users = await restApiService.restApi({
    url   : "users",
    method: "get"
  });

  return users;
}