import styles from "./animatedIcons.module.css";

const animatedIcons = ({ name }) => {
  const iconsObject = {
    "cloud-sun-rays": (
      <div className={styles.icon}>
        <div className={styles.cloud}></div>
        <div className={styles.sun}>
          <div className={styles.rays}></div>
        </div>
        <div className={styles.rain}></div>
      </div>
    ),
    "thunder-storm": (
      <div className={styles.icon}>
        <div className={styles.cloud}></div>
        <div className={styles.lightning}>
          <div className={styles.bolt}></div>
          <div className={styles.bolt}></div>
        </div>
      </div>
    ),
    cloudy: (
      <div className={styles.icon}>
        <div className={styles.cloud}></div>
        <div className={styles.cloud}></div>
      </div>
    ),
    flurries: (
      <div className={styles.icon}>
        <div className={styles.cloud}></div>
        <div className={styles.snow}>
          <div className={styles.flake}></div>
          <div className={styles.flake}></div>
        </div>
      </div>
    ),
    sunny: (
      <div className={styles.icon}>
        <div className={styles.sun}>
          <div className={styles.rays}></div>
        </div>
      </div>
    ),
    rainy: (
      <div className={styles.icon}>
        <div className={styles.cloud}></div>
        <div className={styles.rain}></div>
      </div>
    ),
  };

  const currentIcon = iconsObject[name];
  return <div> {currentIcon} </div>;
};

export default animatedIcons;
