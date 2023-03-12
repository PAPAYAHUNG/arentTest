import React, { useEffect } from 'react';
import styled from 'styled-components/macro';

import logo from '../../assets/TopNavigation/logo.svg';
import iconMemo from '../../assets/TopNavigation/icon_memo.svg';
import iconChallenge from '../../assets/TopNavigation/icon_challenge.svg';
import iconInfo from '../../assets/TopNavigation/icon_info.svg';
import iconMenu from '../../assets/TopNavigation/icon_menu.svg';
import { useNavigate } from 'react-router-dom';
import useMealHistoryService from '../../hooks/useMealHistoryService';

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.color.dark500};
  color: ${(props) => props.theme.color.light};
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

  &:hover {
    cursor: pointer;
  }
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

  &:hover {
    cursor: pointer;
  }

  .noti-icon{
    display: flex;
    align-items: center;
    position: relative;

    img {
      width: 32px;
      height: 32px;
    }

    .notification {
    position: absolute;
    top: -2px;
    right: -6px;
    width: 16px;
    height: 16px;
    background-color: ${(props) => props.theme.color.primary500};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    font-family: ${(props) => props.theme.typo.family.inter}

  }

  }

  .text {
    padding-left: 8px;
  }


`;

const StyledMenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const TopNavigation = () => {
  
  const { mealHistoryState,fetchMealHistory } = useMealHistoryService();
  const { notification } = mealHistoryState || {};

  useEffect(() => {
    fetchMealHistory({ isAppendList: false });
  }, []);
  
  const navigate = useNavigate()

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledLogo onClick={()=>{navigate('/')}}>
          <img src={logo} alt="logo-heathy" />
        </StyledLogo>
        <StyledNavigator>
          <div className="sub-container">
            <StyledItem onClick={()=>{navigate('/myRecord')}}>
              <img src={iconMemo} alt="icon-memo" />
              <div className="text">自分の記録</div>
            </StyledItem>
            <StyledItem>
              <img src={iconChallenge} alt="icon-challenge" />
              <div className="text">チャレンジ</div>
            </StyledItem>
            <StyledItem>
              <div className='noti-icon'>
                <img src={iconInfo} alt="icon-info" />
                {notification>0 && (
                  <div className="notification">{notification}</div>
                )}
              </div>
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
