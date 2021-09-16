import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("components/common/layout"));

const Main: React.FC = () => {
  return <Layout>메인</Layout>;
};

export default Main;
