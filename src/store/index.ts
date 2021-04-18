import { createStore, combineReducers, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import rest from './rest';

const rootReducer = combineReducers({
  rest,
});

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk, logger)
);

export default store;

export type RootState = ReturnType<typeof rootReducer>;