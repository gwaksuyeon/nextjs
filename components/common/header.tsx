import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Logo>로고</Logo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  position: sticky;
  top: 0;
  left: 0;
  background: #fff;
  box-shadow: 0 3px 8px 0 #e9e9e9;
  padding: 0 4.4%;
  z-index: 100;
`;

const Logo = styled.div`
  width: 100px;
  height: 36px;
  background: #e9e9e9;
  margin-right: auto;
`;

export default Header;
