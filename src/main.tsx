import * as React    from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes }  from "react-router-config";
import routes            from './router';

ReactDOM.render(
  <BrowserRouter>
    { renderRoutes(routes) }
  </BrowserRouter>,
  document.getElementById("root")
);