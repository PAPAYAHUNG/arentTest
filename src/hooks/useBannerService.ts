import { useCallback } from 'react';
import { shallowEqual } from 'react-redux';
import * as bannerAction from '../redux/slice/bannerSlice';
import { useAppDispatch, useAppSelector } from './useStateHook';

const useBannerService = () => {
  const dispatch = useAppDispatch();

  //  Selectors
  const bannerState = useAppSelector((state) => state.banner, shallowEqual);

  // Dispatch Function
  const fetchBanner = useCallback(() => {
    dispatch(bannerAction.fetchBanner());
  }, [dispatch]);

  return {
    fetchBanner,
    bannerState,
  };
};

export default useBannerService;
