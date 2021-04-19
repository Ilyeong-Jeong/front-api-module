import * as React    from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes }  from "react-router-config";
import routes            from './router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './store';

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk, logger)
);


ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      { renderRoutes(routes) }
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);