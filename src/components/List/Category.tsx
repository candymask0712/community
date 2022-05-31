import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from 'styled-components';
import { Autoplay } from 'swiper';

const Container = styled.div`
  margin: 0px 0px 0px 18px;
`;

const CategoryElement = styled.div`
  background: #2c7fff;
  border-radius: 20px;
  margin: 0px 0px 0px 18px;
  height: 38px;
`;

const Category = () => {
  const settings = {
    dots: false,
    infinite: false,
    swipeToSlide: true,
    slidesToShow: 4.5
  };

  return (
    <Container>
      <section className='page-carousel'>
        <Slider {...settings}>
          <CategoryElement>전체</CategoryElement>
          <CategoryElement>인기글</CategoryElement>
          <CategoryElement>대선청원</CategoryElement>
          <CategoryElement>자유글</CategoryElement>
          <CategoryElement>무언가 엄청난 내용</CategoryElement>
        </Slider>
      </section>
    </Container>
  );
};

export default Category;
