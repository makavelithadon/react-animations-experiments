import { SET_SELECTED, SET_MOBILE_SIDEBAR_VISIBILITY } from "types";

export const goTo = dispatch => (characters, selected, action) => {
  const currentIndex = characters.findIndex(c => c.id === selected.id);
  let newSelected;
  if (action === "next") {
    newSelected = characters[currentIndex + 1] ? characters[currentIndex + 1] : characters[0];
  } else {
    newSelected = characters[currentIndex - 1] ? characters[currentIndex - 1] : characters[characters.length - 1];
  }
  dispatch(setSelected(newSelected));
};

export const toggleMobileSidebar = dispatch => visibility => dispatch(setMobileSidebarVisibility(visibility));

const setMobileSidebarVisibility = visibility => ({
  type: SET_MOBILE_SIDEBAR_VISIBILITY,
  visibility
});

const setSelected = newOne => ({
  type: SET_SELECTED,
  selected: newOne
});
