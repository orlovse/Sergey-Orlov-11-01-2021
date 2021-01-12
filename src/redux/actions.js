import {
  SWITCH_DARK,
  GET_LOCATION,
  LOAD_CURRENT_WEATHER,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_FIVE_DAYS_WEATHER,
  SEARCH_CITY,
} from "./constants";
import { currentWeather, fiveDays } from "../mockData";
import { searchCity } from "../mockData";

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

const loadCurrentWeather = (cityId, dispatch, getState) => {
  const state = getState();
  const loading = state.currentWeather.loading;
  const loaded = state.currentWeather.loaded;
  console.log("stateeee", state, loading);
  if (loading || loaded) return;
  dispatch({ type: LOAD_CURRENT_WEATHER + REQUEST });
  try {
    const response = currentWeather[0];
    dispatch({ type: LOAD_CURRENT_WEATHER + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_CURRENT_WEATHER + FAILURE, error });
    //TODO need toaster or dispatch to error page
  }
};

const loadFiveDaysWeather = (cityId, dispatch, getState) => {
  const state = getState();
  const loading = state.fiveDaysWeather.loading;
  const loaded = state.fiveDaysWeather.loaded;
  if (loading || loaded) return;
  dispatch({ type: LOAD_FIVE_DAYS_WEATHER + REQUEST });
  try {
    const response = fiveDays;
    dispatch({ type: LOAD_FIVE_DAYS_WEATHER + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_FIVE_DAYS_WEATHER + FAILURE, error });
    //TODO need toaster or dispatch to error page
  }
};

export const loadAllWeather = (cityId) => async (dispatch, getState) => {
  loadCurrentWeather(cityId, dispatch, getState);
  loadFiveDaysWeather(cityId, dispatch, getState);
};

export const loadSearchCity = (name) => (dispatch, getState) => {
  const state = getState();
  const loading = state.loading;
  const loaded = state.loaded;
  if (loading || loaded) return;
  dispatch({ type: SEARCH_CITY + REQUEST });
  try {
    const response = searchCity;
    dispatch({ type: SEARCH_CITY + SUCCESS, response });
  } catch (error) {
    dispatch({ type: SEARCH_CITY + FAILURE, error });
    //TODO need toaster or dispatch to error page
  }
};
