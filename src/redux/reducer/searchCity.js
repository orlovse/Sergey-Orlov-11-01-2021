import { SEARCH_CITY, REQUEST, SUCCESS, FAILURE } from "../constants";

const initialState = {
  entities: [],
  losding: false,
  loaded: false,
  error: null,
};

export const searchCity = (state = initialState, action) => {
  const { type, response, error } = action;
  switch (type) {
    case SEARCH_CITY + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_CITY + SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        entities: response,
      };
    case SEARCH_CITY + FAILURE:
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
