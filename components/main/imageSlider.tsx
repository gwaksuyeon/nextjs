import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider: React.FC = () => {
  const setting = {
    arrows: false,
  };
  const Data = [
    "https://i.esdrop.com/d/lduqm2x2pbml/9D1I3OnLyD.jpg",
    "https://i.esdrop.com/d/lduqm2x2pbml/QYg617JFPm.jpg",
    "https://i.esdrop.com/d/lduqm2x2pbml/J4DwShDrXW.jpg",
    "https://i.esdrop.com/d/lduqm2x2pbml/wavNZ4eTkL.jpg",
    "https://i.esdrop.com/d/lduqm2x2pbml/ZgRZmBoBIv.jpg",
  ];
  return (
    <Slider {...setting}>
      {Data.map((obj: any, inx: number) => (
        <ImageWrapper key={`image-${inx}`}>
          <img src={obj} alt={`image${inx + 1}`} />
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
    position: absolute !important;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ImageSlider;
