import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("components/common/layout"));
const ImageSlider = dynamic(() => import("components/main/imageSlider"));

const Main: React.FC = () => {
  return (
    <Layout>
      <BannerWrapper>
        <ImageSlider />
      </BannerWrapper>
    </Layout>
  );
};

const BannerWrapper = styled.div``;

export default Main;
