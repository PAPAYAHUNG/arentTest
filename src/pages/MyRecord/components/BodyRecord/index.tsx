import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import CardBody from './CardBody';
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
    item: 'BODY RECORD',
    url: '/assets/images/MyRecommend-1.jpg',
    href: '',
    text: '自分のカラダの記録',
  },
  {
    id:2,
    item: 'MY EXERCISE',
    url: '/assets/images/MyRecommend-2.jpg',
    href: '',
    text: '自分の運動の記録',
  },
  {
    id:3,
    item: 'MY DIARY',
    url: '/assets/images/MyRecommend-3.jpg',
    href: '',
    text: '自分の日記',
  },
];

const BodyRecord = () => {
  const navigate = useNavigate();

  const handleOnclick = (href: string) => {
    navigate(href);
  };

  
  if(isEmpty(Cards)) return null

  const renderHex = () => {
    return Cards?.map((card) => (
      <CardBody key={card?.id} data={card} handleOnclick={handleOnclick} />
    ));
  };
  return <StyledContainer>{renderHex()}</StyledContainer>;
};

export default memo(BodyRecord);
