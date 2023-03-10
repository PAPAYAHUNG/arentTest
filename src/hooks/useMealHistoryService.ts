import { useCallback } from 'react';
import { shallowEqual } from 'react-redux';
import * as mealHistoryAction from '../redux/slice/mealHistorySlice';
import { useAppDispatch, useAppSelector } from './useStateHook';

const useMealHistoryService = () => {
  const dispatch = useAppDispatch();

  //  Selectors
  const mealHistoryState = useAppSelector((state) => state.mealHistory, shallowEqual);

  // Dispatch Function
  const fetchMealHistory = useCallback(() => {
    dispatch(mealHistoryAction.fetchMealHistory({ isAppendList: false }));
  }, [dispatch]);

  return {
    fetchMealHistory,
    mealHistoryState,
  };
};

export default useMealHistoryService;
