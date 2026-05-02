import React from "react";
import styles from "./AlbumCard.module.css";

const AlbumCard = ({ album }) => {
  return (
    <article className={styles.card}>
      <img className={styles.cover} src={album.cover} alt={`${album.title} cover`} />
      <div className={styles.info}>
        <h3>{album.title}</h3>
        <p>{album.artist}</p>
      </div>
    </article>
  );
};

export default AlbumCard;
