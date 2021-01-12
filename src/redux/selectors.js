import { createSelector } from "reselect";

export const darkThemeSelector = (state) => state.theme.isDark;
export const currentLocationSelector = (state) =>
  state.locations.currentLocation;
export const currentWeatherSelector = (state) => state.currentWeather.entities;
export const fiveDaysWeatherSelector = (state) =>
  state.fiveDaysWeather.entities;

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
