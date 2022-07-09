import { Dispatch } from 'redux';
import { TodosService } from './todos-service';
import { IFetchTodosParams, IFetchTodosActions, TodosActionTypes } from './interfaces';

export const fetchTodos = ({ _page, _limit }: IFetchTodosParams) => {
  return async (dispatch: Dispatch<IFetchTodosActions>) => {
    try {
      dispatch({ type: TodosActionTypes.FETCH_TODOS });
      const response = await TodosService.getTodos(_page, _limit);
      dispatch({ type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data });
    } catch {
      dispatch({ type: TodosActionTypes.FETCH_TODOS_FAILURE, payload: 'Ошибка!' });
    }
  };
};
