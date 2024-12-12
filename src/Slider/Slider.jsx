import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import './styles.css';

    

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
export default function Slider1() {


  return (
    <div>
       <Swiper
          effect={'coverflow'}
        //   grabCursor={true}
        //   centeredSlides={true}
          slidesPerView={'3'}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            // slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
        
        <SwiperSlide><img src="https://img.freepik.com/free-photo/landscape-sand-dune-pattern-sunset-outdoors-generative-ai_188544-8987.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/premium-photo/sunset-panorama-generative-ai_779468-7795.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/premium-photo/alien-planet-with-moons-fantasy-planet-somewhere-universe-created-with-generative-ai-technology_337384-4407.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/premium-photo/expansive-panorama-mountain-range-dawn-generative-ai_372999-14840.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/premium-photo/painting-snowy-mountain-with-moon-background_900101-16063.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/premium-photo/realistic-mountain-landscape-with-sunrise_1234738-58717.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://thumbs.dreamstime.com/b/mountain-landscape-lake-range-large-panorama-ai-generative-271205859.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/premium-photo/mountain-range-with-clouds-words-everest-top_621302-1188.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/premium-photo/realistic-mountain-landscape-with-sunrise_1234738-58717.jpg" alt="" /></SwiperSlide>
        

      </Swiper>
     
    </div>
  )
}