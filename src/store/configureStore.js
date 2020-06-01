import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux';

import ReduxThunk from 'redux-thunk'

import { appReducer } from './appReducer';
import { pizzaReducer } from './pizzaReducer';

// if you're also using redux-thunk, add it as a middleware
const createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk))(createStore);

const rootReducer = combineReducers({
    app: appReducer,
    pizzas: pizzaReducer,
});

export default function configureStore(initialState = {}) {
    return createStoreWithMiddleware(rootReducer, initialState);
}
