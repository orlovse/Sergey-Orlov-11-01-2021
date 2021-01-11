import { SWITCH_DARK, GET_LOCATION } from "./constants";

export const switchDark = (type) => ({
  type: SWITCH_DARK,
  payload: { isDark: type },
});

export const getLocation = () => (dispatch) => {
  const geolocation = navigator.geolocation;
  geolocation.getCurrentPosition((position) => {
    console.log(position.coords);
    dispatch({
      type: GET_LOCATION,
      payload: { position },
    });
  });
};
