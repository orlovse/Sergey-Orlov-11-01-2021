import {
  SWITCH_DARK,
  GET_LOCATION,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_CURRENT_CITY,
} from "../constants";

import { loadFromLocalStorage } from "../../utils";

const initialState = {
  isDark: loadFromLocalStorage("isDark") || false,
  currentLocation: null,
  currentCity: { key: "215854", name: "Tel Aviv", country: "Israel" },
  favorites: {},
};

export const localUserOptions = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: payload.city,
      };
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
    case ADD_TO_FAVORITES:
      const { key, currentWeather } = payload;
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [key]: currentWeather,
        },
      };
    case REMOVE_FROM_FAVORITES:
      const { ...fields } = state.favorites;
      delete fields[payload.key];
      return {
        ...state,
        favorites: fields,
      };
    default:
      return state;
  }
};
