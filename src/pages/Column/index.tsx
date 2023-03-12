import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ColumnCard,RecommendItems } from './Components';
import { useColumnService } from '../../hooks';
import { BackToTop,BrowseMoreButton,Layout,Listing } from '../../components';

const StyledContainer = styled.div`
  max-width: ${(props) => props.theme.metrics.breakpoints.lg};
  margin: 0 auto;
`;

const Column = () => {
  const { fetchColumn, columnState } = useColumnService();
  const { total, columnList, isLoading } = columnState || {};

  useEffect(() => {
    fetchColumn({ isAppendList: false });
  }, []);

  const onBrowseMoreClick = () => {
    fetchColumn({ isAppendList: true });
  };

  const hasBrowseMoreButton = !isLoading && columnList.length < total;
  return (
    <Layout>
      <StyledContainer>
        <RecommendItems />
        <Listing
          listItems={columnList}
          isLoading={isLoading}
          Component={ColumnCard}
          marginTop="0px"
          marginBottom="26px"
          gutter={[8, 18]}
        />
        <BrowseMoreButton
          onBrowseMoreClick={onBrowseMoreClick}
          hasBrowseMoreButton={hasBrowseMoreButton}
          isLoading={isLoading}
          content="コラムをもっと見る"
        />
        <BackToTop offsetBottom={'272px'} offsetRight={'96px'} />
      </StyledContainer>
    </Layout>
  );
};

export default Column;
