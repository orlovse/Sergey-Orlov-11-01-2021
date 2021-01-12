import { combineReducers } from "redux";

import theme from "./theme";
import locations from "./locations";
import currentWeather from "./currenWeather";

export default combineReducers({ theme, locations, currentWeather });
