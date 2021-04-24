import { Rest } from "modules/api";

// REST API Test URL (참고: https://reqres.in/)
const restBaseUrl = "https://reqres.in";

const restApiService = new Rest(restBaseUrl);

export default restApiService;