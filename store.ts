import { configureStore } from '@reduxjs/toolkit';
import deliveryTypeReducer from './src/redux/deliveryTypeSlice';
import itemInfoReducer from './src/redux/itemInfoSlice';
import locationReducer from './src/redux/locationSlice';

export const store = configureStore({
  reducer: {
    deliveryType: deliveryTypeReducer,
    itemInfo: itemInfoReducer,
    location: locationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch