import React, { ReactNode } from 'react';
import styled from 'styled-components/macro';
import { Col, Row } from 'antd';
import { Gutter } from 'antd/es/grid/row';
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
interface ListingProps {
  header?: string | ReactNode;
  listItems: any;
  isLoading: boolean;
  fullData?: any;
  Component: any;
  marginTop?: string;
  marginBottom?: string;
  gutter?: [Gutter,Gutter] //Left Gutter for X axis, Right Gutter for Y axis
}
const Listing = ({
  listItems,
  isLoading,
  Component,
  header,
  fullData,
  marginTop,
  marginBottom,
  gutter
}: ListingProps) => {

  if (!Component) return null;

  return (
    <StyledWrapper marginTop={marginTop} marginBottom={marginBottom}>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledContainer>
          {header && header}
          <Row gutter={gutter || [8, 8]}>
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
  gutter:[8,8]
};

export default Listing;
