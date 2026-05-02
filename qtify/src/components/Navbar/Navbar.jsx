import React from "react";
import Logo from "../Logo/Logo";
import Search from "../SearchBar/SearchBar"
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search placeholder="search" />
      <Button>Give Feedback</Button>
    </nav>
  );
};

export default Navbar;