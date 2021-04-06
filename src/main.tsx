import * as React    from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes }  from "react-router-config";
import routes            from './router';

import { Provider } from 'react-redux';
import store        from './store';

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      { renderRoutes(routes) }
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);