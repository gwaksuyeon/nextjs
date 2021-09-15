import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Head from "next/head";

const Layout = dynamic(() => import("components/common/Layout"));

const Main: React.FC = () => {
  return (
    <>
      <Head>
        <title>주문하기</title>
      </Head>
      <Layout>주문하기</Layout>
    </>
  );
};

export default Main;
