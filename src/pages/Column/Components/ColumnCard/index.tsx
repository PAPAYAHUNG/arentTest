import React, { memo, useMemo } from 'react';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getStaticCDN } from '../../../../utils/utils';

const StyleWrapper = styled.div`
  .description {
    ${(props) => props.theme.typo.style.small3ButtonOrLink}
    font-family: ${(props) => props.theme.typo.family.hiraginoKakuGothic};
    margin-top: 7px;
  }

  .supplements {
    display: flex;
    gap: 10px;
  }

  &:hover{
    cursor: pointer;
  }
`;

const StyledSupplement = styled.div`
  ${(props) => props.theme.typo.style.label}
  font-family: ${(props) => props.theme.typo.family.hiraginoKakuGothic};
  color: ${(props) => props.theme.color.primary400};
`;
const StyledContainer = styled.div`
  position: relative;
  width: 234px;
  height: 145px;

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
    width: 144px;
    background-color: ${(props) => props.theme.color.primary300};
    color: ${(props) => props.theme.color.light};
    ${(props) => props.theme.typo.style.small2ButtonOrLink}
    font-family: ${(props) => props.theme.typo.family.hiraginoKakuGothic};

    .meal-bagde-text {
      padding-left: 5px;
      display: flex;

      .time {
        margin-left: 10px;
      }
    }
  }
`;
const ColumnCard = ({ data }: any) => {
  const { date, image, text, url, time, supplements } = data || {};
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };

  const supplementsList = useMemo(
    () =>
      supplements?.map((supplement: any) => (
        <StyledSupplement key={supplement}>{supplement}</StyledSupplement>
      )),
    [supplements],
  );

  return (
    <StyleWrapper>
      <StyledContainer>
        <LazyLoadImage
          alt="Column Card"
          src={getStaticCDN(image)} // use normal <img> attributes as props
          className="lazy-load-image"
          onClick={handleClick}
        />
        <div className="meal-badge">
          <div className="meal-bagde-text">
            <div className="date">{date}</div>
            <div className="time">{time}</div>
          </div>
        </div>
      </StyledContainer>
      <div className="description">{text}</div>
      <div className="supplements">{supplementsList}</div>
    </StyleWrapper>
  );
};

export default memo(ColumnCard);
