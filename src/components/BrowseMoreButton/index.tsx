import React, { FC } from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const StyledSpinWrapper = styled.div`
  width: 100%;
  margin: 16px 0;
  text-align: center;
`;

const Container = styled.div`
  margin: 40px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ant-btn {
    width: 250px;
    text-transform: capitalize;
    margin-top: 16px;
  }

  &:hover{
    cursor: pointer;
  }
`;

const StyledButton = styled.div`
  font-family: ${(props) => props.theme.typo.family.hiraginoKakuGothic};
  ${(props) => props.theme.typo.style.l1Header}
  color: ${(props) => props.theme.color.light};
  background: ${(props) => props.theme.color.primary300to400};
  width: 296px;
  height: 56px;
  text-align: center;
  line-height: 56px;
  border-radius: 5px;

`;

const BrowseMoreButton: FC<any> = ({
  onBrowseMoreClick,
  isLoading,
  hasBrowseMoreButton,
}) => {
  if (isLoading)
    return (
      <StyledSpinWrapper>
        <Spin />
      </StyledSpinWrapper>
    );

  return (
    <Container>
      {hasBrowseMoreButton && (
        <StyledButton onClick={onBrowseMoreClick}>
          記録をもっと見る
        </StyledButton>
      )}
    </Container>
  );
};

export default BrowseMoreButton;
