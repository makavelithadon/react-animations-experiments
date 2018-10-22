import { combineReducers, createStore } from "redux";
import characters from "./characters";
import showMobileSidebar from "./showMobileSidebar";

const reducer = combineReducers({
  characters,
  showMobileSidebar
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
