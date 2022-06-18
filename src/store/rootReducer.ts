import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { TodosReducer } from './pages/TodosPage/reducer';
import { UsersReducer } from './pages/UsersPage/reducer';

const reducers = {
  users: UsersReducer,
  todos: TodosReducer,
};

export const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
