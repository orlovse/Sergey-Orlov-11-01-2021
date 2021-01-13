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
  SWITCH_FAHRENHEIT,
  LOAD_CITY_BY_GEOLOCATION,
} from "./constants";
import { currentWeather, fiveDays } from "../mockData";
import { searchCity } from "../mockData";

import { saveToLocalStorage, removeFromLocalStorage } from "../utils";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const FIVE_DAYS_URL = process.env.REACT_APP_FIVE_DAYS_URL;
const AUTOCOMPLETE_SEARCH_URL = process.env.REACT_APP_AUTOCOMPLETE_SEARCH_URL;
const CURRENT_CONDITIONS_URL = process.env.REACT_APP_CURRENT_CONDITIONS_URL;

export const setCurrentCity = (city) => ({
  type: SET_CURRENT_CITY,
  payload: { city },
});

export const switchDark = (type) => (dispatch) => {
  saveToLocalStorage("isDark", type);
  dispatch({
    type: SWITCH_DARK,
    payload: { isDark: type },
  });
};

export const switchFahrenheit = (type) => (dispatch) => {
  saveToLocalStorage("isFahrenheit", type);
  dispatch({
    type: SWITCH_FAHRENHEIT,
    payload: { isFahrenheit: type },
  });
};

export const getLocation = () => async (dispatch, getState) => {
  const geolocation = navigator.geolocation;
  geolocation.getCurrentPosition((position) => {
    dispatch({
      type: GET_LOCATION,
      payload: { position },
    });
    loadCityByGeolocation(position.coords, dispatch, getState);
  });
};

const loadCityByGeolocation = async (coords, dispatch, getState) => {
  const state = getState();
  const loading = state.cityByGeolocation.loading;
  const loaded = state.cityByGeolocation.loaded;
  if (loading || loaded) return;
  dispatch({ type: LOAD_CITY_BY_GEOLOCATION + REQUEST });
  try {
    const response = searchCity;
    // const response = await fetch(
    //   `${BASE_URL}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${coords.latitude},${coords.longitude}`
    // ).then((res) => res.json());
    dispatch({ type: LOAD_CITY_BY_GEOLOCATION + SUCCESS, response });
    const city = {
      key: response.Key,
      name: response.LocalizedName,
      country: response.Country.LocalizedName,
    };
    // setCurrentCity(city);
    dispatch({ type: SET_CURRENT_CITY, payload: { city } });
  } catch (error) {
    dispatch({ type: LOAD_CITY_BY_GEOLOCATION + FAILURE, error });
    //TODO need toaster or dispatch to error page
  }
};

export const addFavorite = (key, currentCityName, currentWeather) => (
  dispatch
) => {
  saveToLocalStorage("favorites", {
    [key]: { currentCityName, currentWeather },
  });
  dispatch({
    type: ADD_TO_FAVORITES,
    payload: { key, currentCityName, currentWeather },
  });
};

export const removeFromFavorite = (key) => (dispatch) => {
  removeFromLocalStorage(key);
  dispatch({
    type: REMOVE_FROM_FAVORITES,
    payload: { key },
  });
};

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
