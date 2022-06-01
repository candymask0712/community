import React, { Component } from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';

const Category = ({ setSelectedCategory }: any) => {
  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false
  };

  const getSelectedCategory = (e: any) => {
    let tmp = e.target.innerHTML;
    if (tmp === '⭐인기글') tmp = '인기글';
    setSelectedCategory(tmp);
  };

  return (
    <Container>
      <Slider {...settings}>
        <div style={{ width: 80 }}>
          <Menu onClick={getSelectedCategory}>전체</Menu>
        </div>
        <div style={{ width: 130 }}>
          <Menu onClick={getSelectedCategory}>⭐인기글</Menu>
        </div>
        <div style={{ width: 120 }}>
          <Menu onClick={getSelectedCategory}>대선청원</Menu>
        </div>
        <div style={{ width: 100 }}>
          <Menu onClick={getSelectedCategory}>자유글</Menu>
        </div>
        <div style={{ width: 80 }}>
          <Menu onClick={getSelectedCategory}>뉴스</Menu>
        </div>
        <div style={{ width: 100 }}>
          <Menu onClick={getSelectedCategory}>노하우</Menu>
        </div>
      </Slider>
    </Container>
  );
};
export default Category;

//  class VariableWidth extends Component {
//   render() {}
// }

const Container = styled.div`
  margin: 22px 0px 22px 22px;
`;

const Menu = styled.div`
  text-align: center;
  border-radius: 20px;
  border: 1px solid #e8e8e8;
  padding: 5px;
  margin: 5px;
  height: 38px;
  line-height: 38px;
`;
