import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar />
      <Button>Give Feedback</Button>
    </nav>
  );
}
