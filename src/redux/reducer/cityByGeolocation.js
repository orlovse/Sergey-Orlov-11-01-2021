import {
  LOAD_CITY_BY_GEOLOCATION,
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

export const cityByGeolocation = (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case LOAD_CITY_BY_GEOLOCATION + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_CITY_BY_GEOLOCATION + SUCCESS:
      return {
        ...state,
        entities: response,
        loading: false,
        loaded: true,
      };
    case LOAD_CITY_BY_GEOLOCATION + FAILURE:
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
