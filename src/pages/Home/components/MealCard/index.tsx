import React, { FC, memo } from 'react';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import dayjs from 'dayjs';
import { getStaticCDN } from '../../../../utils/utils';

const StyledContainer = styled.div`
  position: relative;
  width: 234px;
  height: 234px;

  .lazy-load-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .meal-badge {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 32px;
    width: 120px;
    background-color: ${(props) => props.theme.color.primary300};
    color: ${(props) => props.theme.color.light};
    font-family: ${(props) => props.theme.typo.family.inter};
    ${(props) => props.theme.typo.style.small2ButtonOrLink}

    .meal-bagde-text {
      padding-left: 5px;
    }
  }
`;

export interface MealCardProps {
  id: number;
  name: string;
  image: string;
  url: string;
  date: string;
  period: string;
}

const MealCard:FC<{data:MealCardProps}> = ({ data }) => {
  const { date, image, period, url } = data || {};
  const navigate = useNavigate();
  const formatedDate = dayjs(date).format('MM.DD');

  const handleClick = () => {
    navigate(url);
  };

  return (
    <StyledContainer>
      <LazyLoadImage
        alt={`Meal card ${period}`}
        src={getStaticCDN(image)} // use normal <img> attributes as props
        className="lazy-load-image"
        onClick={handleClick}
      />
      <div className="meal-badge">
        <div className="meal-bagde-text">{`${formatedDate}.${period}`}</div>
      </div>
    </StyledContainer>
  );
};

export default memo(MealCard);
