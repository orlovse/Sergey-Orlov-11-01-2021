import { SWITCH_DARK } from "../constants";

const initialState = {
  isDark: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SWITCH_DARK:
      return {
        ...state,
        isDark: payload.isDark,
      };
    default:
      return state;
  }
};
