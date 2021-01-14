import { get } from "lodash";
import { createSelector } from "reselect";

export const currentCitySelector = (state) =>
  state.localUserOptions.currentCity;
export const currentCityKeySelector = createSelector(
  currentCitySelector,
  (city) => city.key
);
export const currentCityNameSelector = createSelector(
  currentCitySelector,
  (city) => city.name
);

export const darkThemeSelector = (state) => state.localUserOptions.isDark;

export const fahrenheitSelector = (state) =>
  state.localUserOptions.isFahrenheit;

export const currentLocationSelector = (state) =>
  state.localUserOptions.currentLocation;

export const favoritesSelector = (state) => state.localUserOptions.favorites;

export const cityOptionsSelector = (state) => state.searchCity.entities;

export const currentWeatherSelector = (state) => state.currentWeather.entities;

export const fiveDaysWeatherSelector = (state) =>
  state.fiveDaysWeather.entities;
export const fiveDaysModifiedSelector = createSelector(
  fiveDaysWeatherSelector,
  (weather) => {
    const dailyForecasts = get(weather, "DailyForecasts", []);
    // if (!weather.DailyForecasts) return [];
    return dailyForecasts.map((item) => ({
      temperature: get(item, "Temperature", null),
      icon: get(item, "Day.Icon", null),
      phrase: get(item, "Day.IconPhrase", null),
      date: get(item, "Date", null),
      weekday: item.Date
        ? new Date(item.Date).toLocaleDateString("en-US", {
            weekday: "long",
          })
        : null,
    }));
  }
);
