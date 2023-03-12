import React from 'react';
import styled from 'styled-components/macro';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import dayjs from 'dayjs';
import { getStaticCDN } from '../../../../utils/utils';

const StyledContainer = styled.div`
  max-height: 231px;
  width: 231px;
  padding: 16px;
  border: 2px solid ${(props) => props.theme.color.borderGray};
  margin-top: 5px;

  .date,
  .time {
    ${(props) => props.theme.typo.style.l2Header}
    font-family: ${(props) => props.theme.typo.family.inter};
  }

  .description{
    margin-top: 8px;
    ${(props) => props.theme.typo.style.label1}
    font-family: ${(props) => props.theme.typo.family.hiraginoKakuGothic};
  }

`;
const DiaryCard = ({ data }: any) => {
  console.log('diary', data);
  const { date, text, time } = data || {};

  return (
    <StyledContainer>
      <div className="date">{date}</div>
      <div className="time">{time}</div>
      {/* <div className="description">{text}</div> */}
      <div
        className="description"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </StyledContainer>
  );
};

export default DiaryCard;
