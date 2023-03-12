import { useCallback } from 'react';
import { shallowEqual } from 'react-redux';
import * as columnAction from '../redux/slice/columnSlice';
import { useAppDispatch, useAppSelector } from './useStateHook';

const useColumnService = () => {
  const dispatch = useAppDispatch();

  //  Selectors
  const columnState = useAppSelector((state) => state.column, shallowEqual);

  // Dispatch Function
  const fetchColumn = useCallback((isAppendList:{isAppendList?:boolean}) => {
    dispatch(columnAction.fetchColumn(isAppendList));
  }, [dispatch]);

  return {
    fetchColumn,
    columnState,
  };
};

export default useColumnService;
