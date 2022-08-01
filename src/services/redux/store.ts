import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from './ticketSlice';

const store = configureStore({
  reducer: ticketReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;