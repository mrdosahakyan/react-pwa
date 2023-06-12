import {
  configureStore,
  combineReducers,
  CombinedState,
  AnyAction,
} from '@reduxjs/toolkit';
import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import testSlice from './slices/test.slice';
import { ClientPortalApi } from './apiSlice/clientPortal.slices';

type TState =
  | CombinedState<{
      [x: string]: unknown;
    }>
  | undefined;

const appReducer = combineReducers({
  [ClientPortalApi.reducerPath]: ClientPortalApi.reducer,
  testSlice: testSlice.reducer,
});

const rootReducer = (state: TState, action: AnyAction) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action);
  }

  // @ts-ignore
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = cb =>
  useSelector(cb, shallowEqual);

setupListeners(store.dispatch);
