import styles from "./animatedHeart.module.css";
import { useState } from "react";

const AnimatedHeart = () => {
  const [clicked, setClick] = useState(false);
  const style = clicked ? styles.active : styles.heart;
  return <div className={style} onClick={() => setClick(!clicked)}></div>;
};

export default AnimatedHeart;
