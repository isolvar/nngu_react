import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { UsersReducer } from './pages/UsersPage/reducer';

const reducers = {
  users: UsersReducer,
};

const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
