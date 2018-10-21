import { combineReducers, createStore } from "redux";
import characters from "./characters";

const reducer = combineReducers({
  characters
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
