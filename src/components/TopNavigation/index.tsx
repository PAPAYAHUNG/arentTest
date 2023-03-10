import React from 'react';
import styled from "styled-components/macro";

import logo from '../../assets/TopNavigation/logo.svg';
import iconMemo from '../../assets/TopNavigation/icon_memo.svg';
import iconChallenge from '../../assets/TopNavigation/icon_challenge.svg';
import iconInfo from '../../assets/TopNavigation/icon_info.svg';
import iconMenu from '../../assets/TopNavigation/icon_menu.svg';

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.color.dark500}; ;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${(props) => props.theme.metrics.breakpoints.lg};
  margin: auto;
  height: 64px;
`;

const StyledLogo = styled.div`
  display: flex;
`;

const StyledNavigator = styled.div`
  display: flex;
  font-family: ${(props) => props.theme.typo.family.hiraginoKakuGothic};
  ${(props) => props.theme.typo.style.lHeader}

  .sub-container {
    display: flex;
  }
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  width: 160px;

  img {
    width: 32px;
    height: 32px;
  }

  .text {
    padding-left: 8px;
  }
`;

const StyledMenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopNavigation = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledLogo>
          <img src={logo} alt="logo-heathy" />
        </StyledLogo>
        <StyledNavigator>
          <div className="sub-container">
            <StyledItem>
              <img src={iconMemo} alt="icon-memo" />
              <div className="text">自分の記録</div>
            </StyledItem>
            <StyledItem>
              <img src={iconChallenge} alt="icon-challenge" />
              <div className="text">チャレンジ</div>
            </StyledItem>
            <StyledItem>
              <img src={iconInfo} alt="icon-info" />
              <div className="text">お知らせ</div>
            </StyledItem>
          </div>
          <StyledMenuButton>
            <img src={iconMenu} alt="icon-menu" />
          </StyledMenuButton>
        </StyledNavigator>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default TopNavigation;
