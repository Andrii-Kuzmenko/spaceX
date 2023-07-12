import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Button, LogoLink } from "..";
import { HeartIcon } from "../icons";
import { Navigation } from "./components";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    navigate('/spaceX/favorites');
  }
  return (
    <div className={styles.header}>
      <LogoLink className={styles.logo} />

      <Navigation />

      <div className={styles.ButtonGroup}>
        <Button
          onClick={handleClick}
          className={classNames(
            [styles.heartButton],
            { [styles.active]: pathname === '/spaceX/favorites' },
          )}
        >
          <HeartIcon />
        </Button>

        <Button className={styles.signInButton}>
          <p className={styles.signInButtonText}>sign in</p>
        </Button>
      </div>
    </div>
  )
};
