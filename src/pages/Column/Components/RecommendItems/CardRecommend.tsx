import React from 'react';
import styled from 'styled-components/macro';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getStaticCDN } from '../../../../utils/utils';
import { Divider } from 'antd';

const StyledContainer = styled.div`
  position: relative;
  width: 216px;
  height: 144px;
  background-color: ${(props) => props.theme.color.dark600};
  color: ${(props) => props.theme.color.light};

  &:hover {
    cursor: pointer;
  }

  .divider {
    width: 56px;
    background-color: ${(props) => props.theme.color.light};
    height: 1px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 8px;
  }

  .card-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .card-text-option {
      font-family: ${(props) => props.theme.typo.family.inter};
      ${(props) => props.theme.typo.style.l4Header}
      color: ${(props) => props.theme.color.primary300};
    }

    .card-text-explain {
      display: flex;
      justify-content: center;
      align-items: center;

      font-family: ${(props) => props.theme.typo.family.hiraginoKakuGothic};
      ${(props) => props.theme.typo.style.l1Header}
      white-space: nowrap;
      text-align: center;
    }
  }
`;
const CardRecommend = ({ data, handleOnclick }: any) => {

  const { item, href, text } = data || {};

  return (
    <StyledContainer
      onClick={() => {
        handleOnclick(href);
      }}
    >
      <div className="card-text">
        <div className="card-text-option">{item}</div>
        <div className="divider"></div>
        <div className="card-text-explain">{text}</div>
      </div>
    </StyledContainer>
  );
};

export default CardRecommend;
