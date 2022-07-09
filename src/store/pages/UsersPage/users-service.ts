import { $api } from '../../../api/axios-instance';

export const UsersService = {
  getUsers: (_page: number, _limit: number) => $api.get('/users', { params: { _page, _limit } }),
};
