import { useCallback } from 'react';
import { shallowEqual } from 'react-redux';
import * as myRecordAction from '../redux/slice/myRecordSlice';
import { useAppDispatch, useAppSelector } from './useStateHook';

const useMyRecordService = () => {
  const dispatch = useAppDispatch();

  //  Selectors
  const myRecordState = useAppSelector((state) => state.myRecord, shallowEqual);

  // Dispatch Function
  const fetchMyRecord = useCallback((isAppendList:{isAppendList?:boolean}) => {
    dispatch(myRecordAction.fetchMyRecord(isAppendList));
  }, [dispatch]);

  return {
    fetchMyRecord,
    myRecordState,
  };
};

export default useMyRecordService;
