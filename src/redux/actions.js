import {
  INCREMENT,
  DECREMENT,
  CHANGE_THEME,
  DISABLE_BUTTONS,
  ENABLE_BUTTONS
} from "./types";

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function asyncDecrement() {
  return function (dispatch) {
    dispatch(disableButtons());
    setTimeout(() => {
      dispatch({ type: DECREMENT });
      dispatch(enableButtons());
    }, 1500);
  };
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  };
}

export function disableButtons(newTheme) {
  return {
    type: DISABLE_BUTTONS
  };
}

export function enableButtons(newTheme) {
  return {
    type: ENABLE_BUTTONS
  };
}
