import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
function Header() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiperSlider">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ex.</p>
        </SwiperSlide>
        <SwiperSlide className="swiperSlider">
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ex.</p>
        </SwiperSlide>
        <SwiperSlide className="swiperSlider">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ex.</p>
        </SwiperSlide>
        <SwiperSlide className="swiperSlider">
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ex.</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Header;
