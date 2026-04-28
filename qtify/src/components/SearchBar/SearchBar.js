import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <input
      className={styles.searchbar}
      type="text"
      placeholder="Search a song of your choice"
      value={query}
      onChange={handleChange}
    />
  );
}
