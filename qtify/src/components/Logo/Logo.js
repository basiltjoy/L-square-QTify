import React from "react";
import styles from "./Logo.module.css";
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <a href="/" className={styles.logoLink}>
        <img src={logo} alt="QTify Logo" className={styles.logoImage} />
      </a>
    </div>
  );
}
