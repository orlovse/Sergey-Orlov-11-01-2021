import {
  API_KEY,
  BASE_URL,
  GEOPOSITION_URL,
  CURRENT_CONDITIONS_URL,
  FIVE_DAYS_URL,
  AUTOCOMPLETE_SEARCH_URL,
} from "./config";

export const callApiLoadCityByGeo = async (coords) =>
  fetch(
    `${BASE_URL}/${GEOPOSITION_URL}?apikey=${API_KEY}&q=${coords.latitude},${coords.longitude}`
  ).then((res) => res.json());

export const callApiCurrentWeather = (key) =>
  fetch(
    `${BASE_URL}${CURRENT_CONDITIONS_URL}/${key}?apikey=${API_KEY}`
  ).then((res) => res.json());

export const callApiFiveDaysWeather = (key) =>
  fetch(
    `${BASE_URL}${FIVE_DAYS_URL}/${key}?apikey=${API_KEY}&metric=true`
  ).then((res) => res.json());

export const callApiSearchCity = (city) =>
  fetch(
    `${BASE_URL}${AUTOCOMPLETE_SEARCH_URL}?apikey=${API_KEY}&q=${city}`
  ).then((res) => res.json());
