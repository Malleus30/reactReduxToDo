import { highListReducer } from "./highList";
import { lowListReducer } from "./lowList";
import { createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
    high:highListReducer,
    low:lowListReducer
})

export const store = createStore(rootReducer, composeWithDevTools());

