import {
  SWITCH_DARK,
  GET_LOCATION,
  LOAD_CURRENT_WEATHER,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_FIVE_DAYS_WEATHER,
  SEARCH_CITY,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_CURRENT_CITY,
} from "./constants";
import { currentWeather, fiveDays } from "../mockData";
import { searchCity } from "../mockData";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const FIVE_DAYS_URL = process.env.REACT_APP_FIVE_DAYS_URL;
const AUTOCOMPLETE_SEARCH_URL = process.env.REACT_APP_AUTOCOMPLETE_SEARCH_URL;
const CURRENT_CONDITIONS_URL = process.env.REACT_APP_CURRENT_CONDITIONS_URL;

export const setCurrentCity = (city) => ({
  type: SET_CURRENT_CITY,
  payload: { city },
});

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

export const addFavorite = (key, currentWeather) => ({
  type: ADD_TO_FAVORITES,
  payload: { key, currentWeather },
});

export const removeFromFavorite = (key) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: { key },
});

const loadCurrentWeather = async (cityId, dispatch, getState) => {
  const state = getState();
  const loading = state.currentWeather.loading;
  const loaded = state.currentWeather.loaded;
  if (loading) return;
  dispatch({ type: LOAD_CURRENT_WEATHER + REQUEST });
  try {
    const response = currentWeather[0];
    // let response = await fetch(
    //   `${BASE_URL}${CURRENT_CONDITIONS_URL}/${cityId}?apikey=${API_KEY}`
    // ).then((res) => res.json());

    // response = response[0];
    dispatch({ type: LOAD_CURRENT_WEATHER + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_CURRENT_WEATHER + FAILURE, error });
    //TODO need toaster or dispatch to error page
  }
};

const loadFiveDaysWeather = async (cityId, dispatch, getState) => {
  const state = getState();
  const loading = state.fiveDaysWeather.loading;
  const loaded = state.fiveDaysWeather.loaded;
  if (loading || loaded) return;
  dispatch({ type: LOAD_FIVE_DAYS_WEATHER + REQUEST });
  try {
    const response = fiveDays;
    // const response = await fetch(
    //   `${BASE_URL}${FIVE_DAYS_URL}/${cityId}?apikey=${API_KEY}`
    // ).then((res) => res.json());
    dispatch({ type: LOAD_FIVE_DAYS_WEATHER + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_FIVE_DAYS_WEATHER + FAILURE, error });
    //TODO need toaster or dispatch to error page
  }
};

export const loadAllWeather = (cityId) => async (dispatch, getState) => {
  console.log("test");
  loadCurrentWeather(cityId, dispatch, getState);
  loadFiveDaysWeather(cityId, dispatch, getState);
};

export const loadSearchCity = (name) => async (dispatch, getState) => {
  const state = getState();
  const loading = state.loading;
  const loaded = state.loaded;
  if (loading || loaded) return;
  dispatch({ type: SEARCH_CITY + REQUEST });
  try {
    const response = searchCity;
    // const response = await fetch(
    //   `${BASE_URL}${AUTOCOMPLETE_SEARCH_URL}?apikey=${API_KEY}&q=${name}`
    // ).then((res) => res.json());
    dispatch({ type: SEARCH_CITY + SUCCESS, response });
  } catch (error) {
    dispatch({ type: SEARCH_CITY + FAILURE, error });
    //TODO need toaster or dispatch to error page
  }
};
