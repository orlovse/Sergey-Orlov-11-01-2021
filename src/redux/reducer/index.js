import { combineReducers } from "redux";

import theme from "./theme";
import locations from "./locations";
import currentWeather from "./currenWeather";
import fiveDaysWeather from "./fiveDaysWeather";

export default combineReducers({
  theme,
  locations,
  currentWeather,
  fiveDaysWeather,
});
