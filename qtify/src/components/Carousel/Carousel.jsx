import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import styles from "./Carousel.module.css";

// Register the custom HTML elements provided by Swiper
register();

const Carousel = ({ data, renderComponent }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperEl = swiperRef.current;

    // Define slider settings
    const settings = {
      slidesPerView: "auto",
      spaceBetween: 40,
      navigation: true, // Enables arrows
      allowTouchMove: true, // Enables swiping
    };

    // Apply settings to the swiper-container
    Object.assign(swiperEl, settings);

    // Initialize the swiper
    swiperEl.initialize();
  }, [data]);

  if (!data || data.length === 0) return null;

  return (
    <div className={styles.carouselContainer}>
      <swiper-container ref={swiperRef} init="false">
        {data.map((item) => (
          <swiper-slide key={item.id}>
            {renderComponent(item)}
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default Carousel;