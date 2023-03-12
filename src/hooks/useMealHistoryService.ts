import { useCallback } from 'react';
import { shallowEqual } from 'react-redux';
import * as mealHistoryAction from '../redux/slice/mealHistorySlice';
import { useAppDispatch, useAppSelector } from './useStateHook';

const useMealHistoryService = () => {
  const dispatch = useAppDispatch();

  //  Selectors
  const mealHistoryState = useAppSelector((state) => state.mealHistory, shallowEqual);

  // Dispatch Function
  const fetchMealHistory = useCallback((isAppendList:{isAppendList?:boolean}) => {
    dispatch(mealHistoryAction.fetchMealHistory(isAppendList));
  }, [dispatch]);

  return {
    fetchMealHistory,
    mealHistoryState,
  };
};

export default useMealHistoryService;
