import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useInView } from "react-intersection-observer";

import Data from "components/post/data.json";

const Layout = dynamic(() => import("components/common/layout"));
const Spinner = dynamic(() => import("components/common/spinner"));
const TabMenu = dynamic(() => import("components/post/tabMenu"));
const Campaign = dynamic(() => import("components/post/campaign"));

const Main: React.FC = () => {
  const [ref, inView] = useInView();
  const LIMIT_COUNT = 5;
  const [currentTab, setCurrentTab] = useState<string>("instagram");
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const onClickTab = (tab: string) => {
    setCurrentTab(tab);
  };

  const onRead = async () => {
    setLoading(true);
    setTimeout(() => {
      setData(
        data.concat(
          Data.slice(page * LIMIT_COUNT, page * LIMIT_COUNT + LIMIT_COUNT)
        )
      );
    }, 500);
    setLoading(false);
  };

  useEffect(() => {
    onRead();
  }, [page]);

  useEffect(() => {
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);

  return (
    <>
      <Head>
        <title>게시물 배포</title>
      </Head>
      <Layout>
        <TabMenu currentTab={currentTab} onClickTab={onClickTab} />
        <GuideWrapper>
          <p>
            로그인 후 기자단 신청시 건당 최대 10,000쿤을 적립 받을 수 있어요
          </p>
        </GuideWrapper>

        <SliderWrapper>
          {data &&
            data.map((obj: any, inx: number) =>
              data.length - 1 === inx ? (
                <div
                  key={`slider-${inx}`}
                  ref={ref}
                  style={{
                    display: "felx",
                    alignItems: "cneter",
                    flex: "0 0 4.4%",
                    padding: "0 0 0 10px",
                  }}
                >
                  <Spinner />
                </div>
              ) : (
                <Campaign key={`slider-${inx}`} data={obj} />
              )
            )}
        </SliderWrapper>
      </Layout>
    </>
  );
};

const GuideWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4.4%;
  margin-bottom: 10px;
`;

const SliderWrapper = styled.div`
  display: flex;
  padding: 0 4.4%;
  overflow-x: auto;
`;

const SpinnerWrapper = styled.div`
  flex: 0 0 40px;
  position: relative;
`;

export default Main;
