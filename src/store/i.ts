import { ITodosState } from './pages/TodosPage/interface';
import { IUsersState } from './pages/UsersPage/interfaces';

export interface IStore {
  users: IUsersState;
  todos: ITodosState;
}
