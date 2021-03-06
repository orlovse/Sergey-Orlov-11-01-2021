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

import { saveToLocalStorage, removeFromLocalStorage } from "../utils";

import { toast } from "react-toastify";
import {
  currentCityKeySelector,
  currentWeatherLoadedSelector,
} from "./selectors";
import {
  callApiLoadCityByGeo,
  callApiCurrentWeather,
  callApiFiveDaysWeather,
  callApiSearchCity,
} from "./api";

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
    const response = await callApiLoadCityByGeo(coords);
    dispatch({ type: LOAD_CITY_BY_GEOLOCATION + SUCCESS, response });
    const city = {
      key: response.Key,
      name: response.LocalizedName,
      country: response.Country.LocalizedName,
    };
    dispatch({ type: SET_CURRENT_CITY, payload: { city } });
  } catch (error) {
    dispatch({ type: LOAD_CITY_BY_GEOLOCATION + FAILURE, error });
  }
};

export const addFavorite = (
  key,
  currentCityName,
  currentCountry,
  currentWeather
) => (dispatch) => {
  saveToLocalStorage("favorites", {
    [key]: { currentCityName, currentCountry, currentWeather },
  });
  dispatch({
    type: ADD_TO_FAVORITES,
    payload: { key, currentCityName, currentCountry, currentWeather },
  });
  toast.success("City added to favorites!", {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const removeFromFavorite = (key) => (dispatch) => {
  removeFromLocalStorage(key);
  dispatch({
    type: REMOVE_FROM_FAVORITES,
    payload: { key },
  });
  toast.warning("City removed from favorites!", {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const loadCurrentWeather = async (cityId, dispatch, getState) => {
  const state = getState();
  const loading = state.currentWeather.loading;
  if (loading) return;
  dispatch({ type: LOAD_CURRENT_WEATHER + REQUEST });
  try {
    const response = await callApiCurrentWeather(cityId);

    dispatch({ type: LOAD_CURRENT_WEATHER + SUCCESS, response: response[0] });
  } catch (error) {
    dispatch({ type: LOAD_CURRENT_WEATHER + FAILURE, error });
    toast.error("Error loading current weather!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

const loadFiveDaysWeather = async (cityId, dispatch, getState) => {
  const state = getState();
  const loading = state.fiveDaysWeather.loading;
  if (loading) return;
  dispatch({ type: LOAD_FIVE_DAYS_WEATHER + REQUEST });
  try {
    const response = await callApiFiveDaysWeather(cityId);

    dispatch({ type: LOAD_FIVE_DAYS_WEATHER + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_FIVE_DAYS_WEATHER + FAILURE, error });
    toast.error("Error loading weather!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const loadAllWeather = (cityId) => async (dispatch, getState) => {
  const state = getState();
  const isCityLoaded = currentWeatherLoadedSelector(state);
  const currentCityKey = currentCityKeySelector(state);
  if (!isCityLoaded || cityId !== currentCityKey) {
    loadCurrentWeather(cityId, dispatch, getState);
    loadFiveDaysWeather(cityId, dispatch, getState);
  }
};

export const loadSearchCity = (name) => async (dispatch, getState) => {
  const state = getState();
  const loading = state.loading;
  const loaded = state.loaded;
  if (loading || loaded) return;
  dispatch({ type: SEARCH_CITY + REQUEST });
  try {
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      const response = await callApiSearchCity(name);
      dispatch({ type: SEARCH_CITY + SUCCESS, response });
    }, 1000);
  } catch (error) {
    dispatch({ type: SEARCH_CITY + FAILURE, error });
    toast.error("Error!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
