import * as React from 'react';

import { RouteConfig } from 'react-router-config';

import App from '../app';

const routes: RouteConfig[] = [
  {
    component: App,
    routes   : [
      {
        path     : "/",
        exact    : true,
        component: React.lazy(() => import("../page/dashboard"))
      },
      {
        path     : "/rest",
        component: React.lazy(() => import("../page/api-rest-page"))
      },
      {
        path     : "/gql",
        component: React.lazy(() => import("../page/api-gql-page"))
      },
    ]
  }
]

export default routes;