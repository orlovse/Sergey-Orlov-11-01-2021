import styles from "./pages.module.css";
import { Link } from "react-router-dom";
import NotFound from "../components/404";
import { Hidden } from "@material-ui/core";
const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <Hidden smDown>
        <NotFound />
      </Hidden>
      <Hidden mdUp>
        <div className={styles.text}>
          <div>404 Page not found</div>
          <Link to="/" className={styles.link}>
            Go to home page
          </Link>
        </div>
      </Hidden>
    </div>
  );
};

export default NotFoundPage;
