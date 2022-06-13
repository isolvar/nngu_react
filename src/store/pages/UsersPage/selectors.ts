import { IStore } from '../../i';

export const getUsersData = (state: IStore) => {
  return state.users.usersData;
};
