import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider2() {
  return (
      <>
          
          
      <Swiper
        slidesPerView={3}
        spaceBetween={9}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
              <SwiperSlide><img style={{ height:'50vh', width:'100%'}} src="https://static.vecteezy.com/system/resources/previews/007/762/581/non_2x/landscape-view-drawing-palm-with-sunset-or-sunrise-background-illustration-concept-romantic-free-vector.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{ height:'50vh', width:'100%'}} src="https://t4.ftcdn.net/jpg/01/45/52/77/360_F_145527778_1z1ET8DPhQXEUkWW7NR5nFxUzR9zxdfo.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{ height:'50vh', width:'100%'}} src="https://m.media-amazon.com/images/I/61+2Fub1EdL._AC_UF1000,1000_QL80_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{ height:'50vh', width:'100%'}} src="https://easydrawingguides.com/wp-content/uploads/2018/02/how-to-draw-a-sunset-featured-image-1200.png" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{ height:'50vh', width:'100%'}} src="https://i.pinimg.com/originals/33/3c/13/333c137003f31dfd8df4f2c8ce8b1557.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{ height:'50vh', width:'100%'}} src="https://i.pinimg.com/736x/3a/9d/31/3a9d31518c1aed571d5d0ecf94045c34.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{ height:'50vh', width:'100%'}} src="https://static.vecteezy.com/system/resources/previews/007/862/029/original/landscape-view-drawing-palm-with-sunset-or-sunrise-background-illustration-concept-romantic-vector.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{ height:'50vh', width:'100%'}} src="https://t3.ftcdn.net/jpg/01/45/52/86/360_F_145528606_6KXInNdJjymv0RVSu1wWuuMKp9ONrc9o.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img style={{ height:'50vh', width:'100%'}} src="https://www.surfertoday.com/images/stories/sunset-sketch.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
