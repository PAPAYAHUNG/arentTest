import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getStaticCDN } from '../../../../utils/utils';

const StyledContainer = styled.div`
  position: relative;
  width: 288px;
  height: 288px;
  background-color: ${(props) => props.theme.color.primary300};
  color: ${(props) => props.theme.color.light};

  &:hover {
    cursor: pointer;
  }

  .image-container {
    width: 240px;
    height: 240px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .overlay {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.8);
      width: 100%;
      height: 100%;
    }
  }

  .lazy-load-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .card-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .card-text-option {
      font-family: ${(props) => props.theme.typo.family.inter};
      ${(props) => props.theme.typo.style.l3Header}
      color: ${(props) => props.theme.color.primary400};
      white-space: nowrap;
    }

    .card-text-explain {
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        width: 100%;
        font-family: ${(props) => props.theme.typo.family.hiraginoKakuGothic};
        ${(props) => props.theme.typo.style.small1ButtonOrLink}
        margin-top: 11px;
        width: 160px;
        height: 24px;
        white-space: nowrap;
        text-align: center;
        background-color: ${(props) => props.theme.color.primary400};
      }
    }
  }
`;

interface CardProps {
  id:number
  item: string
  url: string
  href: string
  text:
   string
}

interface CardBodyProps{
  data:CardProps
  handleOnclick:(href:string)=>void
}

const CardBody:FC<CardBodyProps> = ({ data, handleOnclick } ) => {
  const { item, href, text, url } = data || {};

  return (
    <StyledContainer
      onClick={() => {
        handleOnclick(href);
      }}
    >
      <div className="image-container">
        <div className="overlay"></div>
        <LazyLoadImage
          alt={`Card ${item}`}
          src={getStaticCDN(url)}
          className="lazy-load-image"
        />
      </div>
      <div className="card-text">
        <div className="card-text-option">{item}</div>
        <div className="card-text-explain">
          <p>{text}</p>
        </div>
      </div>
    </StyledContainer>
  );
};

export default CardBody;
