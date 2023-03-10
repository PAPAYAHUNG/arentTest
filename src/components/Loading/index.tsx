import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Loading = () => {
  return (
    <StyledWrapper>
      <Spin size="large" />
    </StyledWrapper>
  );
};

export default Loading;
