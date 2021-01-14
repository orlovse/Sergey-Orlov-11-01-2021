import styles from "./pages.module.css";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <div>404 Page not found</div>
        <Link to="/" className={styles.link}>
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
