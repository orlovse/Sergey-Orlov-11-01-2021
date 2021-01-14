import svg_1 from "../resources/svg/1.svg";
import svg_2 from "../resources/svg/2.svg";
import svg_3 from "../resources/svg/3.svg";
import svg_4 from "../resources/svg/4.svg";
import svg_5 from "../resources/svg/5.svg";
import svg_6 from "../resources/svg/6.svg";
import svg_7 from "../resources/svg/7.svg";
import svg_8 from "../resources/svg/8.svg";
import svg_9 from "../resources/svg/9.svg";
import svg_10 from "../resources/svg/10.svg";

const icons = {
  1: svg_1,
  2: svg_2,
  3: svg_3,
  4: svg_4,
  5: svg_5,
  6: svg_6,
  7: svg_7,
  8: svg_8,
  9: svg_9,
  10: svg_10,
};

export const getIcon = (number) => {
  if (number > 0 && number < 3) {
    return icons[1];
  } else if (number > 2 && number < 7) {
    return icons[2];
  } else if (number > 6 && number < 12) {
    return icons[3];
  } else if (number > 11 && number < 15) {
    return icons[4];
  } else if ((number > 4 && number < 18) || (number > 40 && number < 43)) {
    return icons[5];
  } else if (number === 18 || (number > 38 && number < 41)) {
    return icons[6];
  } else if ((number > 18 && number < 30) || number > 42) {
    return icons[7];
  } else if (number === 32) {
    return icons[8];
  } else if (number > 32 && number < 35) {
    return icons[9];
  } else if (number > 34 && number < 39) {
    return icons[10];
  } else {
    return icons[1];
  }
};
