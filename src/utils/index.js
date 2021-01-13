export const getIconName = (number) => {
  if (number > 0 && number < 6) {
    return "sunny";
  } else if ((number > 5 && number < 12) || (number > 34 && number < 39)) {
    return "cloudy";
  } else if (number > 11 && number < 15) {
    return "cloud-sun-rays";
  } else if ((number > 14 && number < 18) || (number > 40 && number < 43)) {
    return "thunder-storm";
  } else if (number === 18 || (number > 38 && number < 41)) {
    return "rainy";
  } else if ((number > 18 && number < 30) || number > 42) {
    return "flurries";
  } else {
    return "cloudy";
  }
};

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
    const serialisedState = JSON.stringify(value);
    localStorage.setItem(key, serialisedState);
  } catch (e) {
    console.warn(e);
  }
};