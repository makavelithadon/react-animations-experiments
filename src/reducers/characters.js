import { combineReducers } from "redux";
import { SET_SELECTED } from "types";
import characters from "datas";

function selected(state = characters[0], action) {
  switch (action.type) {
    case SET_SELECTED:
      return action.selected;
    default:
      return state;
  }
}

function items(state = characters, action) {
  return characters;
}

export default combineReducers({
  items,
  selected
});
