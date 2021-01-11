import { GET_LOCATION } from "../constants";

const initialState = {
  currentLocation: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LOCATION:
      return {
        ...state,
        currentLocation: {
          latitude: payload.position.coords.latitude,
          longitude: payload.position.coords.longitude,
        },
      };
    default:
      return state;
  }
};
