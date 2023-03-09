import React, { useEffect } from 'react';

import Layout from '../../components/Layout';
import Banner from './components/Banner';

// import * as bannerAction from '../../redux/slice/bannerSlice';
// import { useAppDispatch, useAppSelector } from '../../hooks/useStateHook';
// import { shallowEqual } from 'react-redux';
import useBannerService from '../../hooks/useBannerService';
import ChartBanner from './components/Banner/ChartBanner';

const Home = () => {
  const { fetchBanner, bannerState } = useBannerService();


  // const dispatch = useAppDispatch()
  useEffect(() => {
    fetchBanner()
  }, []);

  // const viewingHistoryState = useAppSelector((state) => state.banner, shallowEqual);

  console.log({bannerState});

  return (
    <Layout>
      <Banner bannerState={bannerState} />
    </Layout>
  );
};

export default Home;
