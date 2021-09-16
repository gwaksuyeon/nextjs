import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Head from "next/head";

const Layout = dynamic(() => import("components/common/layout"));

const Main: React.FC = () => {
  return (
    <>
      <Head>
        <title>쿤적립</title>
      </Head>
      <Layout>쿤적립</Layout>
    </>
  );
};

export default Main;
