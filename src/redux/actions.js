import { SWITCH_DARK } from "./constants";

export const switchDark = (type) => ({
  type: SWITCH_DARK,
  payload: { isDark: type },
});
