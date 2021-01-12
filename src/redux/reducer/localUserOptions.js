import { SWITCH_DARK, GET_LOCATION } from "../constants";

const initialState = {
  isDark: false,
  currentLocation: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SWITCH_DARK:
      return {
        ...state,
        isDark: payload.isDark,
      };
    case GET_LOCATION:
      return {
        ...state,
        currentLocation: {
          latitude: payload.position.coords.latitude,
          longitude: payload.position.coords.longitude,
        },
      };
    default:
      return state;
  }
};
