import { SET_MOBILE_SIDEBAR_VISIBILITY } from "types";

export default function showMobileSidebar(state = false, action) {
  switch (action.type) {
    case SET_MOBILE_SIDEBAR_VISIBILITY:
      return action.visibility;
    default:
      return state;
  }
}
