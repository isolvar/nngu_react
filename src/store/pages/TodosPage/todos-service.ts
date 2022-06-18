import { $api } from '../../../axios-instance';

export const TodosService = {
  getTodos: (_page: number, _limit: number) => $api.get('/todos', { params: { _page, _limit } }),
};
