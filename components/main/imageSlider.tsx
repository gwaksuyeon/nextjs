import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider: React.FC = () => {
  const setting = {
    arrows: false,
  };
  return (
    <Slider {...setting}>
      {new Array(5).fill(0).map((obj: any, inx: number) => (
        <ImageWrapper key={`image-${inx}`}>
          <img src={`/images/image${inx + 1}.jpg`} alt={`image${inx + 1}`} />
        </ImageWrapper>
      ))}
    </Slider>
  );
};

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 80%;

  > img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export default ImageSlider;
