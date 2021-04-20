import { combineReducers } from 'redux';

import { restSaga } from './rest';
import rest from './rest/reducer';
import { all } from 'redux-saga/effects';


const rootReducer = combineReducers({
  rest,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([restSaga()]);
}

// const store = createStore(
//   rootReducer,
//   applyMiddleware(ReduxThunk, logger)
// );

// export default store;