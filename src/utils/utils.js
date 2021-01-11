import img_1 from "../resources/png/01-s.png";
import img_2 from "../resources/png/02-s.png";
import img_3 from "../resources/png/03-s.png";
import img_4 from "../resources/png/04-s.png";
import img_5 from "../resources/png/05-s.png";
import img_6 from "../resources/png/06-s.png";
import img_7 from "../resources/png/07-s.png";
import img_8 from "../resources/png/08-s.png";
import img_11 from "../resources/png/11-s.png";
import img_12 from "../resources/png/12-s.png";
import img_13 from "../resources/png/13-s.png";
import img_14 from "../resources/png/14-s.png";
import img_15 from "../resources/png/15-s.png";
import img_16 from "../resources/png/16-s.png";
import img_17 from "../resources/png/17-s.png";
import img_18 from "../resources/png/18-s.png";
import img_19 from "../resources/png/19-s.png";
import img_20 from "../resources/png/20-s.png";
import img_21 from "../resources/png/21-s.png";
import img_22 from "../resources/png/22-s.png";
import img_23 from "../resources/png/23-s.png";
import img_24 from "../resources/png/24-s.png";
import img_25 from "../resources/png/25-s.png";
import img_26 from "../resources/png/26-s.png";
import img_29 from "../resources/png/29-s.png";
import img_30 from "../resources/png/30-s.png";
import img_31 from "../resources/png/31-s.png";
import img_32 from "../resources/png/32-s.png";
import img_33 from "../resources/png/33-s.png";
import img_34 from "../resources/png/34-s.png";
import img_35 from "../resources/png/35-s.png";
import img_36 from "../resources/png/36-s.png";
import img_37 from "../resources/png/37-s.png";
import img_38 from "../resources/png/38-s.png";
import img_39 from "../resources/png/39-s.png";
import img_40 from "../resources/png/40-s.png";
import img_41 from "../resources/png/41-s.png";
import img_42 from "../resources/png/42-s.png";
import img_43 from "../resources/png/43-s.png";
import img_44 from "../resources/png/44-s.png";

const icons = {
  1: img_1,
  2: img_2,
  3: img_3,
  4: img_4,
  5: img_5,
  6: img_6,
  7: img_7,
  8: img_8,
  11: img_11,
  12: img_12,
  13: img_13,
  14: img_14,
  15: img_15,
  16: img_16,
  17: img_17,
  18: img_18,
  19: img_19,
  20: img_20,
  21: img_21,
  22: img_22,
  23: img_23,
  24: img_24,
  25: img_25,
  26: img_26,
  29: img_29,
  30: img_30,
  31: img_31,
  32: img_32,
  33: img_33,
  34: img_34,
  35: img_35,
  36: img_36,
  37: img_37,
  38: img_38,
  39: img_39,
  40: img_40,
  41: img_41,
  42: img_42,
  43: img_43,
  44: img_44,
};

export const getIcon = (number) => {
  return icons[number] || icons[1];
};
