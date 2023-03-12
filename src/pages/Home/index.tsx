import React, { useEffect } from 'react';

import Layout from '../../components/Layout';
import Banner from './components/Banner';
import useBannerService from '../../hooks/useBannerService';
import HexZone from './components/HexZone';
import useMealHistoryService from '../../hooks/useMealHistoryService';
import Listing from '../../components/Listing';
import styled from 'styled-components';
import BrowseMoreButton from '../../components/BrowseMoreButton';
import BackToTop from '../../components/BackToTop';
import MealCard from './components/MealCard';

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
          marginBottom={"28px"}
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
