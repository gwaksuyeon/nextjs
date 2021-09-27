import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider: React.FC = () => {
  return (
    <Slider>
      {new Array(5).fill(0).map((obj: any, inx: number) => (
        <ImageWrapper key={`image-${inx}`}>
          <Image
            src={require(`public/images/image${inx + 1}.jpg`)}
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
