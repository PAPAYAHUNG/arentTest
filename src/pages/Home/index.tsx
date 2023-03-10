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

  console.log({ bannerState });
  console.log({ mealHistoryState });

  const onBrowseMoreClick = () => {
    fetchMealHistory({ isAppendList: true });
  };

  const hasBrowseMoreButton = !isLoading && mealHistoryList.length < total;
  return (
    <Layout>
      <Banner bannerState={bannerState} />
      <StyledSubContainer>
        <HexZone />
        <Listing data={mealHistoryState} />
        <BrowseMoreButton
          onBrowseMoreClick={onBrowseMoreClick}
          hasBrowseMoreButton={hasBrowseMoreButton}
          isLoading={isLoading}
        />
        <BackToTop offsetBottom={'528px'} offsetRight={'96px'}/>
      </StyledSubContainer>
    </Layout>
  );
};

export default Home;
