import React from "react";
import styled from "styled-components";

import { POST_TAB_MENU_LIST } from "common/variants";

interface Props {
  currentTab: string;
  onClickTab: (tab: string) => void;
}

const TabMenu: React.FC<Props> = ({ currentTab, onClickTab }) => {
  return (
    <Wrapper>
      {Object.keys(POST_TAB_MENU_LIST).map((obj: any, inx: number) => (
        <Tab
          key={`tab-${inx}`}
          active={obj === currentTab}
          onClick={() => onClickTab(obj)}
        >
          {POST_TAB_MENU_LIST[obj]}
        </Tab>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  position: sticky;
  top: 48px;
  background: #fff;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  padding: 0 4%;
  z-index: 100;
`;

const Tab = styled.p<{ active?: boolean }>`
  font-size: 14px;
  font-weight: ${(props) => (props.active ? 700 : 400)};
  color: ${(props) => (props.active ? "#222427" : "#aaa")};
  cursor: pointer;
`;

export default TabMenu;
