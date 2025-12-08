import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import banner1 from "../../assets/college/bg1.jpg";
import banner2 from "../../assets/college/bg2.jpg";
import banner3 from "../../assets/college/bg3.jpg";
import banner4 from "../../assets/college/bg4.jpg";
import banner5 from "../../assets/college/bg5.jpg";
import banner6 from "../../assets/college/bg6.jpg";
import banner7 from "../../assets/college/bg7.jpg";
import banner8 from "../../assets/college/bg8.jpg";
import banner9 from "../../assets/college/bg9.jpg";

import "./Banner.css";

function Banner() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const images = [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8, banner9];

  return (
    <div className="w-full relative">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] xl:h-[95vh]">
              <img
                src={img}
                alt={`banner-${index}`}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out hover:scale-105"
              />
              {/* Smooth Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40 pointer-events-none"></div>
            </div>
          </SwiperSlide>
        ))}

        {/* Swiper Timer Circle */}
        <div className="autoplay-progress absolute bottom-5 right-5 w-12 h-12">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent} className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs"></span>
        </div>
      </Swiper>
    </div>
  );
}

export default Banner;
