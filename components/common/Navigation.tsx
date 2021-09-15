import React from "react";
import styled from "styled-components";
import Router from "next/router";

const Navigation: React.FC = () => {
  const Data = [
    {
      text: "홈",
      link: "/",
    },
    {
      text: "게시물 배포",
      link: "/post",
    },
    {
      text: "쿤적립",
      link: "/coon",
    },
    {
      text: "주문하기",
      link: "/order",
    },
    {
      text: "마이페이지",
      link: "/my-info",
    },
  ];

  return (
    <Wrapper>
      {Data.map((obj: any, inx: number) => (
        <ButtonWrapper key={`nav-${inx}`}>
          <ButtonContainer onClick={() => Router.push(obj.link)}>
            <Icon />
            <ButtonText>{obj.text}</ButtonText>
          </ButtonContainer>
        </ButtonWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  position: sticky;
  bottom: 0;
  background: #fff;
  box-shadow: 0 -1px 0 0 #f0f0f0;
  z-index: 100;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 calc(100% / 5);
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  background: #e9e9e9;
  margin-bottom: 2px;
`;

const ButtonText = styled.p`
  font-size: 10px;
`;

export default Navigation;
