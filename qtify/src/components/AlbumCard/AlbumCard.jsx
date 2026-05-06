import React from "react";
import styles from "./AlbumCard.module.css";

const AlbumCard = ({ album }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img 
          className={styles.cover} 
          src={album.image} 
          alt={`${album.title} cover`} 
          loading="lazy"
        />
      </div>
      <div className={styles.info}>
        <h3 title={album.title}>{album.title}</h3>
        <p>{album.follows ? `${album.follows} Follows` : album.artist}</p>
      </div>
    </article>
  );
};

export default AlbumCard;