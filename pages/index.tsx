import React, { useState, useEffect } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import CountUp from "react-countup";
import { format } from "date-fns";

import { numberFormat, idMasking } from "common/functions";

const Layout = dynamic(() => import("components/common/layout"));
const ImageSlider = dynamic(() => import("components/main/imageSlider"));
const Skeleton = dynamic(() => import("components/common/skeleton"));

const Main: React.FC = () => {
  const [bannerList, setBannerList] = useState<any>(null);
  const [totalResfunds, setTotalResfunds] = useState<number[]>([]);
  const [totalPartners, setTotalPartners] = useState<number[]>([]);
  const [newCampaigns, setNewCampaigns] = useState<number[]>([]);
  const [month, setMonth] = useState<number>(0);
  const imageUrlList = [
    "https://i.esdrop.com/d/lduqm2x2pbml/9D1I3OnLyD.jpg",
    "https://i.esdrop.com/d/lduqm2x2pbml/QYg617JFPm.jpg",
    "https://i.esdrop.com/d/lduqm2x2pbml/J4DwShDrXW.jpg",
    "https://i.esdrop.com/d/lduqm2x2pbml/wavNZ4eTkL.jpg",
    "https://i.esdrop.com/d/lduqm2x2pbml/ZgRZmBoBIv.jpg",
  ];

  const splitNumber = (num: number) => {
    let splitNum = num;
    let splitArray: number[] = [];

    for (let i = 0; i <= num.toString().length; i++) {
      splitArray.unshift(splitNum % 10);
      splitNum = Math.floor(splitNum / 10);
    }

    if (splitArray.length < 6) {
      for (let i = 0; i < 6 - (num.toString().length + 1); i++) {
        splitArray.unshift(0);
      }
    }

    return splitArray;
  };

  const onRead = () => {
    const data = {
      imageUrlList,
      refunds: {
        month: format(new Date(), "M"),
        price: 5,
      },
      totalPartnerCount: 123456,
      newCaampaignCount: 11123,
    };

    setTimeout(() => {
      setBannerList(data.imageUrlList);
      setMonth(Number(data.refunds.month));
      setTotalResfunds(splitNumber(data.refunds.price));
      setTotalPartners(splitNumber(data.totalPartnerCount));
      setNewCampaigns(splitNumber(data.newCaampaignCount));
    }, 500);
  };

  useEffect(() => {
    onRead();
  }, []);

  return (
    <Layout>
      {/* 메인 배너 */}
      <BannerWrapper>
        {bannerList ? (
          bannerList.length > 0 ? (
            <ImageSlider data={bannerList} />
          ) : null
        ) : (
          <Skeleton borderRadius={"0"} height={"80%"} />
        )}
      </BannerWrapper>

      {/* 총 환급액 */}
      <RefundWrapper>
        <TotalRefundWrapper>
          <RefundTitle>{month}월 총 환급액</RefundTitle>
          <PriceWrapper>
            {totalResfunds.length > 0
              ? totalResfunds.map((obj: any, inx: number) => (
                  <CountUp
                    key={`resfunds-${inx}`}
                    end={obj}
                    delay={0.2 * (totalResfunds.length - 1 - inx)}
                    duration={0.2}
                  />
                ))
              : new Array(6)
                  .fill(0)
                  .map((obj: any, inx: number) => (
                    <span key={`num-${inx}`}>0</span>
                  ))}
          </PriceWrapper>
        </TotalRefundWrapper>

        <CountWrapper>
          <TotalPartnerCountWrapper>
            <RefundTitle>총 파트너수</RefundTitle>
            <PriceWrapper>
              {totalPartners.length > 0
                ? totalPartners.map((obj: any, inx: number) => (
                    <CountUp
                      key={`partner-${inx}`}
                      end={obj}
                      delay={0.2 * (totalPartners.length - 1 - inx)}
                      duration={0.2}
                    />
                  ))
                : new Array(6)
                    .fill(0)
                    .map((obj: any, inx: number) => (
                      <span key={`num-${inx}`}>0</span>
                    ))}
            </PriceWrapper>
          </TotalPartnerCountWrapper>
          <NewCampaign>
            <RefundTitle>신규 캠페인</RefundTitle>
            <PriceWrapper>
              {newCampaigns.length > 0
                ? newCampaigns.map((obj: any, inx: number) => (
                    <CountUp
                      key={`campaign-${inx}`}
                      end={obj}
                      delay={0.2 * (newCampaigns.length - 1 - inx)}
                      duration={0.2}
                    />
                  ))
                : new Array(6)
                    .fill(0)
                    .map((obj: any, inx: number) => (
                      <span key={`num-${inx}`}>0</span>
                    ))}
            </PriceWrapper>
          </NewCampaign>
        </CountWrapper>
      </RefundWrapper>

      {/* 활동 랭킹 */}
      <ActiveWrapper>
        {new Array(10).fill(0).map((obj: any, inx: number) => (
          <ActiveListContainer key={`active-list-${inx}`}>
            <ActiveNumbering>{inx + 1}</ActiveNumbering>

            <ActiveId>
              {idMasking(`test${inx % 2 === 0 ? "123456789" : "987651"}`)}
            </ActiveId>

            <ActiveMoney>
              <span>{numberFormat(1112245835)}</span>원
            </ActiveMoney>
          </ActiveListContainer>
        ))}
      </ActiveWrapper>
    </Layout>
  );
};

const BannerWrapper = styled.div``;

// 환급액
const RefundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  margin: 24px 0;
`;

const TotalRefundWrapper = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

const CountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TotalPartnerCountWrapper = styled.div`
  width: 100%;
  flex: 1 1 auto;
  text-align: center;
`;

const NewCampaign = styled(TotalPartnerCountWrapper)`
  margin-left: 20px;
`;

const RefundTitle = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 19px;
`;

// 활동 랭킹
const ActiveWrapper = styled.div``;

const ActiveListContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 4%;
`;

const ActiveNumbering = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 60px;
`;

const ActiveId = styled.div`
  flex: 1 1 auto;
  width: 100%;
`;

const ActiveMoney = styled.div`
  flex: 0 0 120px;
`;

export default Main;
