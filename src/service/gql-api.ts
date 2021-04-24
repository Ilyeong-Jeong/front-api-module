import { Gql } from "modules/api";

// GraphQL API Test URL (참고: https://api.spacex.land/graphql/)
const gqlBaseUrl = "https://api.spacex.land";

const gqlApiService = new Gql(gqlBaseUrl);

export default gqlApiService;