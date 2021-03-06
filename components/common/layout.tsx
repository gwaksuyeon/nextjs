import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("components/common/header"));
const Footer = dynamic(() => import("components/common/footer"));
const Navigation = dynamic(() => import("components/common/navigation"));

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <Navigation />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`;

const Main = styled.div`
  flex: 1 1 auto;
`;

export default Layout;
