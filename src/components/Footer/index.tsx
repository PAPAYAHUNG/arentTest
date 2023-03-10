import React, { useMemo } from 'react';
import styled from "styled-components/macro";

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.color.dark500};
  font-family: ${(props) => props.theme.typo.family.hiraginoKakuGothic};
  ${(props) => props.theme.typo.style.lHeader}
  color: ${(props) => props.theme.color.light};
  height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: ${(props) => props.theme.metrics.breakpoints.lg};
  margin: auto;
  height: 64px;
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:first-child){
      margin-left: 45px;
  }

  a {
    color: ${(props) => props.theme.color.light};
    text-decoration: none;
  }
`;

interface INavigatorProps {
  id: number;
  text: string;
  url?: string;
}

const NAVIGATORS: INavigatorProps[] = [
  { id: 1, text: '会員登録', url: '' },
  { id: 2, text: '運営会社', url: '' },
  { id: 3, text: '利用規約', url: '' },
  { id: 4, text: '個人情報の取扱について', url: '' },
  { id: 5, text: '特定商取引法に基づく表記', url: '' },
  { id: 6, text: 'お問い合わせ', url: '' },
];
const Footer = () => {
  const dataListItems = useMemo(
    () =>
      NAVIGATORS.map((item) => (
        <StyledItem key={item.id}>
          <a href={item.url}>{item.text}</a>
        </StyledItem>
      )),
    [],
  );

  return (
    <StyledContainer>
      <StyledWrapper>{dataListItems}</StyledWrapper>
    </StyledContainer>
  );
};

export default Footer;
