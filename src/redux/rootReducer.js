import { combineReducers } from "redux";
import {
  INCREMENT,
  DECREMENT,
  CHANGE_THEME,
  ENABLE_BUTTONS,
  DISABLE_BUTTONS
} from "./types";

export function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const initialThemeState = {
  value: "light",
  disabled: false
};

export function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        value: action.payload
      };
    case ENABLE_BUTTONS:
      return {
        ...state,
        disabled: false
      };
    case DISABLE_BUTTONS:
      return {
        ...state,
        disabled: true
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
});
