import {
  SWITCH_DARK,
  GET_LOCATION,
  LOAD_CURRENT_WEATHER,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "./constants";
import { currentWeather } from "../mockData";

export const switchDark = (type) => ({
  type: SWITCH_DARK,
  payload: { isDark: type },
});

export const getLocation = () => (dispatch) => {
  const geolocation = navigator.geolocation;
  geolocation.getCurrentPosition((position) => {
    console.log(position.coords);
    dispatch({
      type: GET_LOCATION,
      payload: { position },
    });
  });
};

export const loadCurrentWeather = (cityId) => async (dispatch, getState) => {
  const state = getState();
  const loading = state.loading;
  const loaded = state.loaded;
  if (loading || loaded) return;
  dispatch({ type: LOAD_CURRENT_WEATHER + REQUEST });
  try {
    const response = currentWeather[0];
    setTimeout(null, 1000);
    console.log("response", response);
    dispatch({ type: LOAD_CURRENT_WEATHER + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_CURRENT_WEATHER + FAILURE, error });
    //TODO need toaster or dispatch to error page
  }
};
