import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import ReduxThunk from 'redux-thunk';

import { pizzasReducer as pizzas } from './pizzaReducer';

const createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk))(createStore);

const rootReducer = combineReducers({
  pizzas,
});

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
