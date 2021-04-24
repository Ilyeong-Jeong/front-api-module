import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import routes from './router';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './store';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      { renderRoutes(routes) }
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);