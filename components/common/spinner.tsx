import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

const Spinner: React.FC<Props> = ({
  width = "30px",
  height = "30px",
  color = "red",
}) => {
  return (
    <SpinWrapper width={width} height={height}>
      <Spin color={color} />
    </SpinWrapper>
  );
};

const Animation = keyframes`
    0% {
        transform: translateX(-50%) translateY(-50%) rotate(0deg)
    }
    100% {
        transform: translateX(-50%) translateY(-50%) rotate(360deg)
    }
`;

const SpinWrapper = styled.div<{ width?: string; height?: string }>`
  display: inline-block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;

  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 100%;
  margin: 0 auto;
`;

const Spin = styled.div<{ color?: string }>`
  display: inline-block;
  width: calc(100% + 6px);
  height: calc(100% + 6px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 100%;
  border: 3px solid ${(props) => props.color};
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: ${Animation} 1s linear infinite;
`;

export default Spinner;
