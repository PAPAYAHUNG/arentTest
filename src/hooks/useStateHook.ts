import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppState, AppDispatch } from '../redux/store';

// https://react-redux.js.org/using-react-redux/usage-with-typescript#typing-the-useselector-hook
// https://stackoverflow.com/questions/67453258/why-do-i-need-to-do-export-const-useappdispatch-usedispatchappdispatch
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
