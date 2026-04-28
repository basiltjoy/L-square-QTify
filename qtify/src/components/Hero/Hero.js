import React from "react";
import styles from "./Hero.module.css";
import logo from "../../assets/headphones.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          100 Thousand Songs, ad-free
        </h1>
        <p className={styles.heroSubtitle}>
          Over 500 million songs waiting to be discovered
        </p>
      </div>
      <div className={styles.heroImage}>
        <img 
          src={logo} 
          alt="QTify Logo" 
          className={styles.image}
        />
      </div>
    </section>
  );
}
