import React from 'react';
import styled from 'styled-components/macro';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import dayjs from 'dayjs';
import { getStaticCDN } from '../../utils/utils';

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

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

    .meal-bagde-text {
      padding-left: 5px;
    }
  }
`;
const MealCard = ({ data }: any) => {
  console.log({ data });
  const { date, id, image, period, url } = data || {};
  console.log({ date });

  const formatedDate = dayjs(date).format('MM.DD');
  console.log({ formatedDate });

  return (
    <StyledContainer>
      <LazyLoadImage
        alt={`Meal card ${period}`}

        src={getStaticCDN(image)} // use normal <img> attributes as props
  
        className="lazy-load-image"
        key={id}
      />
      <div className="meal-badge">
        <div className="meal-bagde-text">{`${formatedDate}.${period}`}</div>
      </div>
    </StyledContainer>
  );
};

export default MealCard;
