import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import todoReducer from './reducers/todoReducer';

const initialState = {};

const rootReducer = combineReducers({
    Todo: todoReducer
});

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
   
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;