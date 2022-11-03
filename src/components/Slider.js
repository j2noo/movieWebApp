import styles from "./Slider.module.css";
import githubImg from "../images/github.png";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Navigation, Pagination]);

function Slider({ movies, title }) {
  console.log(movies);
  return (
    <div className={styles.sliderComponent}>
      <p className={styles.title}>{title}</p>
      <Swiper
        className={styles.sliderContainer}
        spaceBetween={30}
        slidesPerView={4}
        scrollbar={{ draggable: true }}
        navigation
        /*pagination={{ clickable: true }}*/
        loop={true}
        breakpoints={{
          // 반응형
          640: { slidesPerView: 4, spaceBetween: 30 },
          768: { slidesPerView: 5 },
          1000: { slidesPerView: 6 },
          1280: { slidesPerView: 7 },
          1440: { slidesPerView: 8 },
        }}
      >
        {movies.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={item.large_cover_image}
              className={styles.sliderImg}
            ></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;