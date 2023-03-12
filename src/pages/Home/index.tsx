import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Layout, Listing, BrowseMoreButton, BackToTop } from '../../components';
import { useBannerService, useMealHistoryService } from '../../hooks';
import { MealCard, HexZone, Banner } from './components';

const StyledSubContainer = styled.div`
  max-width: ${(props) => props.theme.metrics.breakpoints.lg};
  margin: 0 auto;
`;
const Home = () => {
  const { fetchBanner, bannerState } = useBannerService();
  const { fetchMealHistory, mealHistoryState } = useMealHistoryService();

  const { isLoading, total, mealHistoryList } = mealHistoryState || {};

  useEffect(() => {
    fetchBanner();
    fetchMealHistory({ isAppendList: false });
  }, []);

  const onBrowseMoreClick = () => {
    fetchMealHistory({ isAppendList: true });
  };

  if (!mealHistoryList.length) return null;

  const hasBrowseMoreButton = !isLoading && mealHistoryList.length < total;
  return (
    <Layout>
      <Banner bannerState={bannerState} />
      <StyledSubContainer>
        <HexZone />

        <Listing
          listItems={mealHistoryState?.mealHistoryList}
          isLoading={mealHistoryState?.isLoading}
          Component={MealCard}
          marginBottom={'28px'}
        />

        <BrowseMoreButton
          onBrowseMoreClick={onBrowseMoreClick}
          hasBrowseMoreButton={hasBrowseMoreButton}
          isLoading={isLoading}
          content="記録をもっと見る"
        />

        <BackToTop offsetBottom={'528px'} offsetRight={'96px'} />
      </StyledSubContainer>
    </Layout>
  );
};

export default Home;
