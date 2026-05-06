import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/hero-headphones.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div className={styles.imageWrapper}>
        <img src={HeroImage} alt="headphones" className={styles.heroImg} />
      </div>
    </section>
  );
};

export default Hero;