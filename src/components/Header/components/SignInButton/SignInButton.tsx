import React from "react";
import styles from "./SignInButton.module.scss"
import { Button } from "../../../Button";

export const SignInButton = React.memo(() => (
  <Button className={styles.signInButton}>
    <p className={styles.signInButtonText}>sign in</p>
  </Button>
));
