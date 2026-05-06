import React, { useState, useEffect } from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./AlbumSlider.module.css";

const AlbumSlider = ({ albums = [] }) => {
  const [visibleCount, setVisibleCount] = useState(7);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 600) setVisibleCount(1);      
      else if (width < 900) setVisibleCount(3); 
      else if (width < 1200) setVisibleCount(5); 
      else setVisibleCount(7);  
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, albums.length - visibleCount);
  
  useEffect(() => {
    if (startIndex > maxIndex) {
      setStartIndex(maxIndex);
    }
  }, [maxIndex, startIndex]);

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
      
      <div 
        className={styles.track} 
        style={{ "--visible-count": visibleCount }}
      >
        {albums.slice(startIndex, startIndex + visibleCount).map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default AlbumSlider;