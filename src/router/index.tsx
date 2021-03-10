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
        component: React.lazy(() => import("../page/api-test-page"))
      },
    ]
  }
]

export default routes;