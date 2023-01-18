import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { recipesReducer } from "./reducers/recipesReducer.js";
import { dietsReducer } from "./reducers/dietsReducer";

const reducers = combineReducers({ recipesReducer, dietsReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
