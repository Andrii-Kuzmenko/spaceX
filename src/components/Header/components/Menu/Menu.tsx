import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Navigation } from '../Navigation';
import { HeartButton, SignInButton } from '..';
import styles from './Menu.module.scss';

type Props = {
  handleMenuClick: () => void,
  isMenuOpen: boolean
}

export const Menu = React.memo<Props>(({ handleMenuClick, isMenuOpen }) => {
  const navigate = useNavigate();

  const handleHeartClick = () => {
    handleMenuClick();
    navigate('/spaceX/favorites');
  }

  return (
    <div className={classNames(styles.menu, {
      [styles.menuOpen]: isMenuOpen,
    })}>
      <Navigation className={styles.navigation} onClick={handleMenuClick} />

      <div className={styles.menuFooter}>
        <HeartButton onClick={handleHeartClick} />
        <SignInButton />
      </div>
    </div>
  );
});
