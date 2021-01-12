import { LOAD_CURRENT_WEATHER, REQUEST, SUCCESS, FAILURE } from "../constants";

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case LOAD_CURRENT_WEATHER + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_CURRENT_WEATHER + SUCCESS:
      return {
        ...state,
        entities: response,
        loading: false,
        loaded: true,
      };
    case LOAD_CURRENT_WEATHER + FAILURE:
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
