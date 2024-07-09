// Подключение Redux
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux';

// Подключение функций
import { AppDispatch, RootState } from './index';

type DispatchFunc = () => AppDispatch;
export const useDispatch: DispatchFunc = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;