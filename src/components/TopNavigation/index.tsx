import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { NavLink, useNavigate } from 'react-router-dom';
import useMealHistoryService from '../../hooks/useMealHistoryService';
import { getStaticCDN } from '../../utils/utils';
import PopOverItem from '../PopOverItem';

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
    display: none;

    @media screen and (min-width: 960px) {
      display: flex;
    }
  }
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  width: 160px;

  &:hover {
    cursor: pointer;
  }

  .noti-icon {
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
      font-family: ${(props) => props.theme.typo.family.inter};
    }
  }

  .text {
    padding-left: 8px;
  }
`;

const StyledMenuButton = styled.div`
  display: 'flex';
  justify-content: center;
  align-items: center;
  margin-right: 30px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 960px) {
    margin-right: unset;
  }
`;

const StyledItemsContainer = styled.div`
  width: 280px;
  font-family: ${(props) => props.theme.typo.family.hiraginoKakuGothic};
  ${(props) => props.theme.typo.style.l1Header}

  background-color:  ${(props) => props.theme.color.gray400};
  color: ${(props) => props.theme.color.light};
`;

const StyledFloatSubMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 32px;
  height: 72px;
  width: 100%;
  position: relative;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.light};
  }

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.15;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.color.light};

  &.active {
    color: ${(props) => props.theme.color.primary400};
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.light};
  }
`;
interface ItemProps {
  id: number;
  content: string | ReactNode;
  url: string;
}

const ListItem = [
  { id: 1, content: '自分の記録', url: '/myRecord' },
  { id: 2, content: '体重グラフ', url: '/random1' },
  { id: 3, content: '目標', url: '/random2' },
  { id: 4, content: '選択中のコース', url: '/random3' },
  { id: 5, content: 'コラム一覧', url: '/column' },
  { id: 6, content: '設定', url: '/random4' },
];

const TopNavigation = () => {
  const { mealHistoryState, fetchMealHistory } = useMealHistoryService();
  const { notification } = mealHistoryState || {};
  const [isOpenPopOver, setIsOpenPopOver] = useState(false);

  useEffect(() => {
    fetchMealHistory({ isAppendList: false });
  }, []);

  const navigate = useNavigate();

  const renderFloatSubMenu = () => (
    <StyledItemsContainer>
      {ListItem?.map((item: ItemProps) => (
        <StyledNavLink
          key={item.id}
          to={item.url}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <StyledFloatSubMenu>{item.content}</StyledFloatSubMenu>
        </StyledNavLink>
      ))}
    </StyledItemsContainer>
  );

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledNavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <StyledLogo
            onClick={() => {
              navigate('/');
            }}
          >
            <img
              src={getStaticCDN('/Imagine/TopNavigation/logo.svg')}
              alt="logo-heathy"
            />
          </StyledLogo>
        </StyledNavLink>
        <StyledNavigator>
          <div className="sub-container">
            <StyledNavLink
              to="/myRecord"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <StyledItem>
                <img
                  src={getStaticCDN('/Imagine/TopNavigation/icon_memo.svg')}
                  alt="icon-memo"
                />
                <div className="text">自分の記録</div>
              </StyledItem>
            </StyledNavLink>
            <StyledNavLink
              to="/random1"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <StyledItem>
                <img
                  src={getStaticCDN(
                    '/Imagine/TopNavigation/icon_challenge.svg',
                  )}
                  alt="icon-challenge"
                />
                <div className="text">チャレンジ</div>
              </StyledItem>
            </StyledNavLink>
            <StyledNavLink
              to="/random2"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <StyledItem>
                <div className="noti-icon">
                  <img
                    src={getStaticCDN('/Imagine/TopNavigation/icon_info.svg')}
                    alt="icon-info"
                  />
                  {notification > 0 && (
                    <div className="notification">{notification}</div>
                  )}
                </div>
                <div className="text">お知らせ</div>
              </StyledItem>
            </StyledNavLink>
          </div>
          <PopOverItem
            content={() => renderFloatSubMenu()}
            isOpenPopOver={isOpenPopOver}
            setIsOpenPopOver={setIsOpenPopOver}
          >
            <StyledMenuButton>
              <img
                src={
                  isOpenPopOver
                    ? getStaticCDN('/Imagine/TopNavigation/icon_close.svg')
                    : getStaticCDN('/Imagine/TopNavigation/icon_menu.svg')
                }
                alt="icon-menu"
              />
            </StyledMenuButton>
          </PopOverItem>
        </StyledNavigator>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default TopNavigation;
