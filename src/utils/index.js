export const loadFromLocalStorage = (key) => {
  try {
    const serialisedState = localStorage.getItem(key);
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

export const saveToLocalStorage = (key, value) => {
  try {
    if (value.toString() === "[object Object]") {
      const valueFromLocalStorage = loadFromLocalStorage(key);
      value = { ...valueFromLocalStorage, ...value };
    }
    const serialisedState = JSON.stringify(value);
    localStorage.setItem(key, serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    const favorites = loadFromLocalStorage("favorites");
    delete favorites[key];
    const newFavorites = JSON.stringify(favorites);
    localStorage.setItem("favorites", newFavorites);
  } catch (e) {
    console.warn(e);
  }
};

export const celsiusToFahrenheit = (num) => {
  return Math.floor((num * 9) / 5 + 32);
};

export const getUserTime = new Date().getHours();

export const setDarkThemeIfNight = (switchDark) => {
  if (
    (getUserTime > 20 || getUserTime < 6) &&
    typeof loadFromLocalStorage("isDark") !== "boolean"
  ) {
    switchDark(true);
  }
};
