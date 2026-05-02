import React, { useState } from "react";
import styles from "./AlbumsSection.module.css";
import { topAlbums, newAlbums, featuredAlbums } from "../../data/musicData";
import AlbumCard from "../AlbumCard/AlbumCard";
import AlbumSlider from "../Slider/AlbumSlider";

const AlbumsSection = () => {
  const [showAllTop, setShowAllTop] = useState(false);
  const [showAllNew, setShowAllNew] = useState(false);

  return (
    <section className={styles.albumsSection} aria-label="Albums Section">
      <div className={styles.sectionBlock}>
        <div className={styles.headingRow}>
          <h2>Top Albums</h2>
          <span className={styles.countLabel}>{topAlbums.length} Albums</span>
        </div>
        <div className={styles.cardGrid}>
          {(showAllTop ? topAlbums : topAlbums.slice(0, 4)).map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
        <button className={styles.showAllButton} onClick={() => setShowAllTop((prev) => !prev)}>
          {showAllTop ? "Show Less" : "Show All"}
        </button>
      </div>

      <div className={styles.sectionBlock}>
        <div className={styles.headingRow}>
          <h2>New Albums</h2>
          <span className={styles.countLabel}>{newAlbums.length} Albums</span>
        </div>
        <div className={styles.cardGrid}>
          {(showAllNew ? newAlbums : newAlbums.slice(0, 4)).map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
        <button className={styles.showAllButton} onClick={() => setShowAllNew((prev) => !prev)}>
          {showAllNew ? "Show Less" : "Show All"}
        </button>
      </div>

      <div className={styles.sliderBlock}>
        <div className={styles.headingRow}>
          <h2>Featured Albums</h2>
        </div>
        <AlbumSlider albums={featuredAlbums} />
      </div>
    </section>
  );
};

export default AlbumsSection;
