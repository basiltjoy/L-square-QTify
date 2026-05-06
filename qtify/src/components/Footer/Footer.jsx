import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.branding}>
        <h3><b>Qtify</b></h3>
        <p>Discover music that moves you</p>
      </div>
      <div className={styles.copy}>
        <p>© {new Date().getFullYear()} Qtify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
