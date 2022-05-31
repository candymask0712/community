import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper';

import styled from 'styled-components';

const Container = styled.div`
  /* margin: 0px 0px 0px 18px; */
`;

const CategoryElement = styled.div`
  width: 40px;
  background: #2c7fff;
  border-radius: 20px;
  margin: 0px 0px 0px 18px;
  height: 38px;
`;

const Category2 = () => {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        // centeredSlides={true}
        spaceBetween={4}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        loop={false}
        freeMode={true}
        className='mySwiper'
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category2;
