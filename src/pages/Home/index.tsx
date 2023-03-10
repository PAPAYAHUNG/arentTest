import React, { useEffect } from 'react';

import Layout from '../../components/Layout';
import Banner from './components/Banner';

// import * as bannerAction from '../../redux/slice/bannerSlice';
// import { useAppDispatch, useAppSelector } from '../../hooks/useStateHook';
// import { shallowEqual } from 'react-redux';
import useBannerService from '../../hooks/useBannerService';
import HexZone from './components/HexZone';
import useMealHistoryService from '../../hooks/useMealHistoryService';
import Listing from '../../components/Listing';

const Home = () => {
  const { fetchBanner, bannerState } = useBannerService();
  const { fetchMealHistory, mealHistoryState } = useMealHistoryService();

  useEffect(() => {
    fetchBanner()
    fetchMealHistory()
  }, []);

  console.log({bannerState});
  console.log({mealHistoryState});

  return (
    <Layout>
      <Banner bannerState={bannerState} />
      <HexZone/>
      <Listing/>
    </Layout>
  );
};

export default Home;
