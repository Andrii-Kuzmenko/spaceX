import React from 'react';
import styles from './ErrorPage.module.scss';

export const ErrorPage = React.memo(() => (
  <div>
    <div className={styles.backgroundImage}></div>
    <h1 className={styles.title}>Something went wrong</h1>
  </div>
))
