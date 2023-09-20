import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const SwiperPage = () => {
    return (
        <div>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://www.sunhome.ru/i/wallpapers/57/raiskoe-ozero.orig.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://fikiwiki.com/uploads/posts/2022-02/1644988254_14-fikiwiki-com-p-krasivie-kartinki-prirodi-na-rabochii-stol-16.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://fikiwiki.com/uploads/posts/2022-02/1644965594_34-fikiwiki-com-p-kartinki-priroda-na-zastavku-telefona-37.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SwiperPage;
