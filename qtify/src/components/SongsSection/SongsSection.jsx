import React from "react";
import styles from "./SongsSection.module.css";
import { songs } from "../../data/musicData";

const SongsSection = () => {
  return (
    <section className={styles.songsSection} aria-label="Songs Section">
      <div className={styles.headingRow}>
        <h2>Top Songs</h2>
        <span className={styles.countLabel}>{songs.length} Songs</span>
      </div>

      <div className={styles.listGrid}>
        {songs.map((song) => (
          <article key={song.id} className={styles.songCard}>
            <div>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
            <span className={styles.duration}>{song.duration}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SongsSection;
