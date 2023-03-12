import React, { useState } from 'react';
import { Popover } from 'antd';
import styled, { createGlobalStyle } from 'styled-components/macro';

const StyledPopOver = styled(Popover)`
  display: flex;
  align-items: center;
`;

const OverridePopoverStyle = createGlobalStyle`
.lang-popover {
  top: 48px!important;

    .ant-popover-arrow {
      display: none;
    }

    .ant-popover-inner {
      padding: unset;

      .ant-popover-inner-content {
        padding: 0;
        border-radius: 12px;
      }
    }
  }
`;

const PopOverItem = ({
  children,
  content,
  isOpenPopOver,
  setIsOpenPopOver,
}: any) => {
  if (!children) return null;

  return (
    <StyledPopOver
      overlayClassName="lang-popover"
      content={content}
      placement="bottomRight"
      open={isOpenPopOver}
      onOpenChange={(visible) => {
        setIsOpenPopOver(visible);
      }}
      align={{ offset: [0, 5] }}
      trigger={'click'}
      overlayInnerStyle={{ borderRadius: 0 }}
    >
      {children}
      <OverridePopoverStyle />
    </StyledPopOver>
  );
};

export default PopOverItem;
