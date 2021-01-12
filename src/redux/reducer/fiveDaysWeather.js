import {
  LOAD_FIVE_DAYS_WEATHER,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "../constants";

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export const fiveDaysWeather = (state = initialState, action) => {
  const { type, response, error } = action;
  switch (type) {
    case LOAD_FIVE_DAYS_WEATHER + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_FIVE_DAYS_WEATHER + SUCCESS:
      return {
        ...state,
        entities: response,
        loading: false,
        loaded: true,
      };
    case LOAD_FIVE_DAYS_WEATHER + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    default:
      return state;
  }
};
