import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("components/common/image"));

interface Props {
  data: any;
  ref?: (node?: Element | null | undefined) => void;
}
const Campaign: React.FC<Props> = ({ data, ref }) => {
  return (
    <SliderContainer ref={ref}>
      <ImageWrapper>
        <SnsIcon />
        <Image src={data.imageUrl} />
      </ImageWrapper>

      <TitleWrapper>
        <Title>{data.title}</Title>

        <Coon>{data.coon}C</Coon>
      </TitleWrapper>

      <RequestContentsWrapper>
        <SubTitle>요청 내용</SubTitle>
        <p>{data.requestContents}</p>
      </RequestContentsWrapper>

      <HashTagWrapper>
        <SubTitle>해시 태그</SubTitle>
        {data.hashTag.map((tag: string, index: number) => (
          <span key={`tag-${index}`}>#{tag}</span>
        ))}
      </HashTagWrapper>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  flex: 1 0 auto;
  width: 70%;

  & ~ & {
    margin-left: 20px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 110%;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;

  > span {
    position: absolute;
  }
`;

const SnsIcon = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  background: #e9e9e9;
  z-index: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-right: auto;
`;

const Coon = styled.p`
  border-radius: 20px;
  border: 1px solid #bbbcbe;
  background: #3b87ce;
  color: #fff;
  padding: 2px 8px;
`;

const RequestContentsWrapper = styled.div`
  margin-bottom: 10px;
`;

const HashTagWrapper = styled.div`
  margin-bottom: 0;

  span ~ span {
    margin-left: 4px;
  }
`;

const SubTitle = styled.p`
  font-size: 14px;
  margin-bottom: 2px;
`;

export default Campaign;
