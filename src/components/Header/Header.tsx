import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { Button, LogoLink } from "..";
import { BurgerIcon, CrossIcon } from "../icons";
import { HeartButton, Menu, Navigation, SignInButton } from "./components";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const onTablet = useMediaQuery('(min-width: 768px)');
  const onDesktop = useMediaQuery('(min-width: 992px)');

  const handleHeartClick = () => {
    navigate('/spaceX/favorites');
  }

  const handleMenuClick = () => {
    setIsMenuOpen(current => !current);
  }

  useEffect(() => {
    isMenuOpen && !onDesktop
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'auto';
  }, [isMenuOpen, onDesktop]);

  return (
    <div className={styles.header}>
      <LogoLink className={styles.logo} onClick={() => setIsMenuOpen(false)} />

      {onDesktop && <Navigation />}

      <div className={styles.ButtonGroup}>
        {onDesktop
          ? <HeartButton onClick={handleHeartClick} />
          : <Button
            onClick={handleMenuClick}
            className={styles.burgerButton}
          >
            {isMenuOpen ? <CrossIcon /> : <BurgerIcon />}
          </Button>
        }

        {onTablet && <SignInButton />}
      </div>

      {isMenuOpen &&
        <Menu handleMenuClick={handleMenuClick} isMenuOpen={isMenuOpen} />
      }
    </div>
  )
};
