export interface ITodosState {
  todosData: ITodo[];
  loading: boolean;
  error: string | null;
}

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export enum TodosActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE',
}

export interface IFetchTodosAction {
  type: TodosActionTypes.FETCH_TODOS;
}

export interface IFetchTodosSuccessAction {
  type: TodosActionTypes.FETCH_TODOS_SUCCESS;
  payload: ITodo[];
}

export interface IFetchTodosFailureAction {
  type: TodosActionTypes.FETCH_TODOS_FAILURE;
  payload: string;
}

export type IFetchTodosActions =
  | IFetchTodosAction
  | IFetchTodosSuccessAction
  | IFetchTodosFailureAction;

export interface IFetchTodosParams {
  _page: number;
  _limit: number;
}
