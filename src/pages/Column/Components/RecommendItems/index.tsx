import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import CardRecommend from './CardRecommend';
import {isEmpty} from 'lodash'

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  padding-top: 56px;
  padding-bottom: 56px;
`;

const Cards = [
  {
    id:1,
    item: 'RECOMMENDED COLUMN',
    href: '',
    text: 'オススメ',
  },
  {
    id:2,
    item: 'RECOMMENDED DIET',
    href: '',
    text: 'ダイエット',
  },
  {
    id:3,
    item: 'RECOMMENDED BEAUTY',
    href: '',
    text: '美容',
  },
  {
    id:4,
    item: 'RECOMMENDED HEALTH',
    href: '',
    text: '健康',
  },
];

const RecommendItems = () => {
  const navigate = useNavigate();

  const handleOnclick = (href: string) => {
    navigate(href);
  };

  
  if(isEmpty(Cards)) return null

  const renderHex = () => {
    return Cards?.map((card) => (
      <CardRecommend key={card?.id} data={card} handleOnclick={handleOnclick} />
    ));
  };
  return <StyledContainer>{renderHex()}</StyledContainer>;
};

export default RecommendItems;
