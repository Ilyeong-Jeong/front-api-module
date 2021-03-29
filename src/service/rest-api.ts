import { Rest } from "module/api";

// REST API Test URL (참고: https://jsonplaceholder.typicode.com)
const restBaseUrl = "https://jsonplaceholder.typicode.com";

const restApiService = new Rest(restBaseUrl);

export default restApiService;