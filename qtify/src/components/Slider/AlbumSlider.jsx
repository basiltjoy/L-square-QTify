import React, { useState } from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./AlbumSlider.module.css";

const AlbumSlider = ({ albums = [] }) => {
  const visibleCount = 3;
  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = Math.max(0, albums.length - visibleCount);

  const handlePrev = () => setStartIndex((current) => Math.max(0, current - 1));
  const handleNext = () => setStartIndex((current) => Math.min(maxIndex, current + 1));

  return (
    <div className={styles.slider}>
      <div className={styles.controls}>
        <button className={styles.controlButton} onClick={handlePrev} disabled={startIndex === 0}>
          Prev
        </button>
        <button className={styles.controlButton} onClick={handleNext} disabled={startIndex === maxIndex}>
          Next
        </button>
      </div>
      <div className={styles.track}>
        {albums.slice(startIndex, startIndex + visibleCount).map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default AlbumSlider;
