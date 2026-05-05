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

  // Fetch Data from API
  const fetchAlbumsData = async () => {
    try {
      setLoading(true);
      // Fetching Top Albums from the provided Crio endpoint
      const response = await axios.get("https://qtify-backend.labs.crio.do/albums/top");
      setTopAlbums(response.data);
      
      // Fetching New Albums from the provided Crio endpoint
      const newAlbumsResponse = await axios.get("https://qtify-backend.labs.crio.do/albums/new");
      setNewAlbums(newAlbumsResponse.data);
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching album data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbumsData();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading Albums...</div>;
  }

  return (
    <section className={styles.albumsSection} aria-label="Albums Section">
      {/* Top Albums Section */}
      <div className={styles.sectionBlock}>
        <div className={styles.headingRow}>
          <h2>Top Albums</h2>
          <button 
            className={styles.showAllButton} 
            onClick={() => setShowAllTop((prev) => !prev)}
          >
            {showAllTop ? "Collapse" : "Show All"}
          </button>
        </div>

        {showAllTop ? (
          <div className={styles.cardGrid}>
            {topAlbums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        ) : (
          <AlbumSlider albums={topAlbums} />
        )}
      </div>

      <hr className={styles.divider} />

      {/* New Albums Section */}
      <div className={styles.sectionBlock}>
        <div className={styles.headingRow}>
          <h2>New Albums</h2>
          <button 
            className={styles.showAllButton} 
            onClick={() => setShowAllNew((prev) => !prev)}
          >
            {showAllNew ? "Collapse" : "Show All"}
          </button>
        </div>

        {showAllNew ? (
          <div className={styles.cardGrid}>
            {newAlbums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        ) : (
          <div className={styles.Carouselcard}>
                <Carousel 
            data={newAlbums} 
            renderComponent={(item) => <AlbumCard album={item} />} />
          </div>
         )}
      </div>

    </section>
  );
};

export default AlbumsSection;