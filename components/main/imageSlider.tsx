import React from "react";
import styled from "styled-components";
import Image from "next/image";
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
          <Image
            layout={"fill"}
            src={obj}
            alt={`image${inx + 1}`}
            objectFit={"cover"}
          />
        </ImageWrapper>
      ))}
    </Slider>
  );
};

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 80%;

  > div {
    position: absolute !important;
    height: 100%;

    > div {
      height: 100%;
    }
  }
`;

export default ImageSlider;
