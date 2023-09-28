import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

const SwiperPage = () => {
    return (
        <div className='w-[100%] bg-slate-400'>
            <div className='w-[90%] mx-auto text-center'>
                <Swiper>
                    <SwiperSlide
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides = {true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={
                            {
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5
                            }
                        }
                    >
                        <img className='w-[600px] h-[400px]' src="https://masyamba.ru/%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B8%D1%81%D1%81%D0%B0%D0%BD/43-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D1%8B-%D0%BD%D0%B8%D1%81%D1%81%D0%B0%D0%BD.jpg" alt="car" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[600px] h-[400px]' src="https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666206241_12-mykaleidoscope-ru-p-kartinka-na-zastavku-oboi-12.jpg" alt="mountains" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[600px] h-[400px]' src="https://w.forfun.com/fetch/71/7111142d25bd0f62d5078b68bbfe40a0.jpeg" alt="summer" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[600px] h-[400px]' src="https://w.forfun.com/fetch/14/140117daf093639c26b6726e4241de34.jpeg" alt="castle" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[600px] h-[400px]' src="https://rare-gallery.com/uploads/posts/2493-8k__8k_wallpaper_landscape_waterfall_nature.jpg" alt="sharshara" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[600px] h-[400px]' src="https://proprikol.ru/wp-content/uploads/2019/08/kartinki-na-zadnij-fon-16.jpg" alt="tosh" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default SwiperPage;
