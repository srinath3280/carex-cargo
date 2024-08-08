import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './homeReviews.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

function HomeReviewsCarousel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                autoplay={{
                    delay: 3500,
                }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay, Navigation]}
                className="reviews-mySwiper"
            >
                <SwiperSlide>
                    <div className='slides'>
                        <img src='/images/femaleicon.jpg' alt='' />
                        <h5>Pooja</h5>
                        <p>
                            Customers appreciate their efficient and friendly service, as well as the reasonable pricing. One reviewer mentioned their car was delivered on time without any issues, making the experience stress-free.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slides'>
                        <img src='/images/maleicon.jpg' alt='' />
                        <h5>Aditya</h5>
                        <p>
                            CAREX is commended for its transparent pricing and excellent communication throughout the shipping process. One customer highlighted their satisfaction with the company's reliability and the condition of their vehicle upon delivery.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slides'>
                        <img src='/images/femaleicon.jpg' alt='' />
                        <h5>Tanya</h5>
                        <p>
                            Renowned for its customer-focused approach and wide range of services. Clients often praise their comprehensive insurance options and responsive customer support. A reviewer noted their smooth experience with detailed tracking updates.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slides'>
                        <img src='/images/maleicon.jpg' alt='' />
                        <h5>Girish</h5>
                        <p>
                            Highly rated for their prompt service and professionalism. Customers appreciate the hassle-free booking process and timely delivery. One review mentioned excellent communication from start to finish, ensuring peace of mind.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slides'>
                        <img src='/images/femaleicon.jpg' alt='' />
                        <h5>Bhavya</h5>
                        <p>
                            Customers value their competitive pricing and strong emphasis on customer satisfaction. One review highlighted the thorough communication and the condition of the vehicle upon arrival.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default HomeReviewsCarousel;