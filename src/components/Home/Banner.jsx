import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner1 from '../../assets/college/bg1.jpg'
import banner2 from '../../assets/college/bg2.jpg'
import banner3 from '../../assets/college/bg3.jpg'
import banner4 from '../../assets/college/bg4.jpg'
import banner5 from '../../assets/college/bg5.jpg'
import banner6 from '../../assets/college/bg6.jpg'
import banner7 from '../../assets/college/bg7.jpg'
import banner8 from '../../assets/college/bg8.jpg'
import banner9 from '../../assets/college/bg9.jpg'




import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Banner() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div>      <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper h-full"
            
        >
            <SwiperSlide className='w-full h-full'><div className='w-full h-full'><img src={banner1} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className='w-full '><img className=' w-full h-full' src={banner2} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className='w-full '><img className=' w-full h-full' src={banner3} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className='w-full '><img className=' w-full h-full' src={banner4} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className='w-full '><img className=' w-full h-full' src={banner5} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className='w-full '><img className=' w-full h-full' src={banner6} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className='w-full '><img className=' w-full h-full' src={banner7} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className='w-full '><img className=' w-full h-full' src={banner8} alt="" /></div></SwiperSlide>
            <SwiperSlide><div className='w-full '><img className=' w-full h-full' src={banner9} alt="" /></div></SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper></div>
    )
}

export default Banner