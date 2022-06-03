import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import productsReducer from './products/reducer';

export const store = configureStore({
  reducer: combineReducers({
    products: productsReducer
  })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
