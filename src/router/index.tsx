import * as React from 'react';

import { RouteConfig } from 'react-router-config';

import App from '../App';

const routes: RouteConfig[] = [
  {
    component: App,
    routes   : [
      {
        path     : "/",
        exact    : true,
        component: React.lazy(() => import("../page/Dashboard"))
      },
      {
        path     : "/rest",
        component: React.lazy(() => import("../page/rest/RestApiPage"))
      },
      {
        path     : "/gql",
        component: React.lazy(() => import("../page/gql/GqlApiPage"))
      },
    ]
  }
]

export default routes;