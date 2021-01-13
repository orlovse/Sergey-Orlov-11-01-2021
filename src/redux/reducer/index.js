import { combineReducers } from "redux";

import { currentWeather } from "./currenWeather";
import { fiveDaysWeather } from "./fiveDaysWeather";
import { searchCity } from "./searchCity";
import { localUserOptions } from "./localUserOptions";
import { cityByGeolocation } from "./cityByGeolocation";

export default combineReducers({
  localUserOptions,
  searchCity,
  cityByGeolocation,
  currentWeather,
  fiveDaysWeather,
});
