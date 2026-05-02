import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import SearchIconImg from "../../assets/search-icon.png";
export default function SearchBar({ placeholder }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        className={styles.searchbar}
        type="text"
        placeholder={placeholder || "Search"}
        value={query}
        onChange={handleChange}
      />
      <button className={styles.searchButton} type="submit">
        <img src={SearchIconImg} alt="search icon" />
      </button>
    </form>
  );
}