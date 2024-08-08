import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './homeprojectcarousel.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

function HomeProjectCarousel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1000,
                }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src='/images/homeProjects/project2.jfif' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/homeProjects/project3.jpeg' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/homeProjects/project1.webp' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/homeProjects/project5.jpg' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/homeProjects/project4.jpg' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/homeProjects/project6.jpg' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/homeProjects/project8.jpg' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/homeProjects/project7.webp' alt='' />
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}

export default HomeProjectCarousel;