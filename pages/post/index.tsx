import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Head from "next/head";

const Layout = dynamic(() => import("components/common/layout"));

const Main: React.FC = () => {
  return (
    <>
      <Head>
        <title>게시물 배포</title>
      </Head>
      <Layout>게시물 배포</Layout>
    </>
  );
};

export default Main;
