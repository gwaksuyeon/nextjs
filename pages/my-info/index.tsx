import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Head from "next/head";

const Layout = dynamic(() => import("components/common/Layout"));

const Main: React.FC = () => {
  return (
    <>
      <Head>
        <title>마이페이지</title>
      </Head>
      <Layout>마이페이지</Layout>
    </>
  );
};

export default Main;
