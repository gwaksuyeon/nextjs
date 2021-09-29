import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  isCircle?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  borderRadius?: string;
}

const Skeleton: React.FC<Props> = ({
  isCircle = false,
  width = "100%",
  height = "30%",
  margin = "0",
  borderRadius = "2%",
}) => {
  return (
    <Wrapper
      isCircle={isCircle}
      width={width}
      height={height}
      margin={margin}
      borderRadius={borderRadius}
    />
  );
};

const shimmer = keyframes`
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
`;

const Wrapper = styled.div<{
  isCircle?: boolean;
  width: string;
  height: string;
  margin: string;
  borderRadius: string;
}>`
  width: ${(props) => props.width};
  padding-bottom: ${(props) => props.height};
  position: relative;
  background: #e9e9e9;
  border-radius: ${(props) =>
    props.isCircle ? "100%" : `${props.borderRadius}`};
  margin: ${(props) => props.margin};
  overflow: hidden;

  &::before {
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.07) 0%,
      rgba(0, 0, 0, 0.04) 20%,
      rgba(0, 0, 0, 0.07) 40%,
      rgba(0, 0, 0, 0.07) 100%
    );
    background-size: 200% 200%;
    animation: ${shimmer} 3s linear infinite;
    content: "";
  }
`;

export default Skeleton;
