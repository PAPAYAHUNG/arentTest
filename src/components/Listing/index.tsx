import React, { ReactNode } from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components/macro';
import Loading from '../Loading';

const StyledColumn = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledWrapper = styled.div<{
  marginTop?: string;
  marginBottom?: string;
}>`
margin-top: ${props=>props.marginTop};
margin-bottom: ${props=>props.marginBottom};
`;
const StyledContainer = styled.div``;
const StyledHeader = styled.div`
  font-family: ${(props) => props.theme.typo.family.inter};
  ${(props) => props.theme.typo.style.l4Header}
  font-size: 22px;
  line-height: 27px;
`;

interface ListingProps {
  header?: string | ReactNode;
  listItems: any;
  isLoading: boolean;
  fullData?: any;
  Component: any;
  marginTop?: string;
  marginBottom?: string;
}
const Listing = ({
  listItems,
  isLoading,
  Component,
  header,
  fullData,
  marginTop,
  marginBottom
}: ListingProps) => {

  if (!Component) return null;

  return (
    <StyledWrapper marginTop={marginTop} marginBottom={marginBottom}>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledContainer>
          {header && <StyledHeader>{header}</StyledHeader>}
          <Row gutter={[8, 8]}>
            {listItems?.map((item: any, index: number) => (
              <StyledColumn
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
                xl={{ span: 6 }}
                xxl={{ span: 4 }}
                key={index}
              >
                <Component data={item} fullData={fullData} />
              </StyledColumn>
            ))}
          </Row>
        </StyledContainer>
      )}
    </StyledWrapper>
  );
};

Listing.defaultProps = {
  header: '',
  fullData: {},
  marginTop: '0px',
  marginBottom: '0px',
};

export default Listing;
