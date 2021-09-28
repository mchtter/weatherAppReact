import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
