import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./AlbumsSection.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";
import AlbumSlider from "../Slider/AlbumSlider";
import Carousel from "../Carousel/Carousel";

const AlbumsSection = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [showAllTop, setShowAllTop] = useState(false);
  const [showAllNew, setShowAllNew] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  const fetchAlbumsData = async () => {
    try {
      setLoading(true);
      const [topRes, newRes] = await Promise.all([
        axios.get("https://qtify-backend.labs.crio.do/albums/top"),
        axios.get("https://qtify-backend.labs.crio.do/albums/new")
      ]);
      setTopAlbums(topRes.data);
      setNewAlbums(newRes.data);
    } catch (error) {
      console.error("Error fetching album data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbumsData();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading Albums...</div>;
  }

  return (
    <section className={styles.albumsSection}>
      {/* Top Albums Section */}
      <div className={styles.sectionBlock}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Top Albums</h2>
          <button 
            className={styles.showAllButton} 
            onClick={() => setShowAllTop((prev) => !prev)}
          >
            {isMobile ? "" : showAllTop ? "See Less" : "See More"}
          </button>
        </div>

        {isMobile || showAllTop ? (
          <div className={styles.cardGrid}>
            {topAlbums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        ) : (
          <div className={styles.carouselWrapper}>
             <AlbumSlider albums={topAlbums} />
          </div>
        )}
      </div>

      <hr className={styles.divider} />

      {/* New Albums Section */}
      <div className={styles.sectionBlock}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>New Albums</h2>
          <button 
            className={styles.showAllButton} 
            onClick={() => setShowAllNew((prev) => !prev)}
          >
            {isMobile ? "" : showAllNew ? "See Less" : "See More"}
          </button>
        </div>

        {isMobile || showAllNew ? (
          <div className={styles.cardGrid}>
            {newAlbums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        ) : (
          <div className={styles.carouselWrapper}>
            <Carousel 
              data={newAlbums} 
              renderComponent={(item) => <AlbumCard album={item} />} 
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AlbumsSection;
