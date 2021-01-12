import { combineReducers } from "redux";

import theme from "./theme";
import locations from "./locations";
import currentWeather from "./currenWeather";
import fiveDaysWeather from "./fiveDaysWeather";
import searchCity from "./searchCity";

export default combineReducers({
  theme,
  locations,
  searchCity,
  currentWeather,
  fiveDaysWeather,
});
