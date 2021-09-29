import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Image = dynamic(() => import("components/common/image"));

interface Props {
  data: any;
}

const ImageSlider: React.FC<Props> = ({ data }) => {
  const setting = {
    dots: true, // dot 메뉴 보이게 - default false
    arrows: false, // 화살표 보이게 - default true
    autoplay: true, // 자동 슬라이드
    autoplaySpeed: 3000, // 자동 슬라이드 속도
  };

  return (
    <SliderWrapper>
      <Slider {...setting}>
        {data.map((obj: any, inx: number) => (
          <ImageWrapper key={`image-${inx}`}>
            <Image src={obj} alt={`image${inx + 1}`} />
          </ImageWrapper>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  min-height: 80%;
  .slick-dots {
    bottom: 0;
  }
`;

const ImageWrapper = styled.div`
  display: block !important;
  width: 100%;
  position: relative;
  padding-bottom: 80%;

  > span {
    width: 100%;
    height: 100%;
    position: absolute !important;
  }
`;

export default ImageSlider;
