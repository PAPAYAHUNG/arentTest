import { Col, Row } from 'antd';
import { nanoid } from 'nanoid';
import React from 'react';
import styled from 'styled-components/macro';
import Loading from '../Loading';
import MealCard from './MealCard';

const StyledColumn = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 234px;
  height: 234px;
`;

const StyledMealContainer = styled.div``;

const Listing = ({ data }: any) => {
  const id = nanoid();
  const { isLoading, mealHistoryList } = data || {};
  return (
    <StyledMealContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <Row gutter={[8, 8]}>
          {mealHistoryList?.map((meal: any) => (
            <StyledColumn
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
              xl={{ span: 6 }}
              xxl={{ span: 4 }}
              key={id}
            >
              <MealCard data={meal} />
            </StyledColumn>
          ))}
        </Row>
      )}
    </StyledMealContainer>
  );
};

export default Listing;
