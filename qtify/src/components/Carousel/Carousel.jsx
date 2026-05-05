import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import styles from "./Carousel.module.css";

register();

const Carousel = ({ data, renderComponent }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperEl = swiperRef.current;

    const settings = {
      slidesPerView: "auto",
      spaceBetween: 40,
      navigation: true, 
      allowTouchMove: true,
    };

    Object.assign(swiperEl, settings);
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