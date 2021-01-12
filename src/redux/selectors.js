import { createSelector } from "reselect";

export const currentCitySelector = (state) =>
  state.localUserOptions.currentCity;
export const currentCityKeySelector = createSelector(
  currentCitySelector,
  (city) => city.key
);
export const darkThemeSelector = (state) => state.localUserOptions.isDark;
export const currentLocationSelector = (state) =>
  state.localUserOptions.currentLocation;
export const favoritesSelector = (state) => state.localUserOptions.favorites;
export const currentWeatherSelector = (state) => state.currentWeather.entities;
export const fiveDaysWeatherSelector = (state) =>
  state.fiveDaysWeather.entities;
export const cityOptionsSelector = (state) => state.searchCity.entities;

export const isFavoriteCity = createSelector(
  currentCityKeySelector,
  favoritesSelector,
  (key, favorites) => {
    return !!favorites[key];
  }
);

export const fiveDaysModifiedSelector = createSelector(
  fiveDaysWeatherSelector,
  (weather) => {
    if (!weather.DailyForecasts) return [];
    return weather.DailyForecasts.map((item) => ({
      temperature: item.Temperature,
      icon: item.Day.Icon,
      phrase: item.Day.IconPhrase,
      date: item.Date,
      weekday: new Date(item.Date).toLocaleDateString("en-US", {
        weekday: "long",
      }),
    }));
  }
);
