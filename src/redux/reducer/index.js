import { combineReducers } from "redux";

import { currentWeather } from "./currenWeather";
import { fiveDaysWeather } from "./fiveDaysWeather";
import { searchCity } from "./searchCity";
import { localUserOptions } from "./localUserOptions";

export default combineReducers({
  localUserOptions,
  searchCity,
  currentWeather,
  fiveDaysWeather,
});
