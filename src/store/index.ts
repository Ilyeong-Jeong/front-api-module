import { combineReducers } from 'redux';

import rest from './rest';

const rootReducer = combineReducers({
  rest,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

// const store = createStore(
//   rootReducer,
//   applyMiddleware(ReduxThunk, logger)
// );

// export default store;