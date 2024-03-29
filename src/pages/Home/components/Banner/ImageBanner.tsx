import React from 'react';
import styled from 'styled-components/macro';
import { Progress } from 'antd';
import { getStaticCDN } from '../../../../utils/utils';

const StyledContainer = styled.div`
  display: flex;
  height: 316px;
  position: relative;
  font-family: ${(props) => props.theme.typo.family.inter};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .progress-status {
    display: flex;
    justify-content: center;
  }
`;

const StyledPercentage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.color.light};

  .progress-status {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: baseline;

    .portion {
      ${(props) => props.theme.typo.style.l2Header}
      white-space: nowrap;
    }

    .percent {
      ${(props) => props.theme.typo.style.l3Header}
      white-space: nowrap;
      margin-left: 4px;
    }
  }

`;

const ImageBanner = ({ data }: any) => {
  const { url, percentage } = data || {};
  const { current, total, percent } = percentage || {};

  return (
    <StyledContainer>
      <img src={getStaticCDN(url)} alt="banner" />
      <StyledPercentage>
        <Progress type="circle" showInfo={false} percent={80} size={181} strokeWidth={2} strokeColor={'#FFFFFF'} />
        <div className="progress-status">
          <div className="portion">{`${current} /${total}`}</div>
          <div className="percent">{`${percent}%`}</div>
        </div>
      </StyledPercentage>
    </StyledContainer>
  );
};

export default ImageBanner;
