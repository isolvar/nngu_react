import { Dispatch } from 'redux';
import { UsersService } from './users-service';
import { IFetchUsersActions, IFetchUsersParams, UsersActionTypes } from './interfaces';

export const fetchUsersAsync = ({ _page, _limit }: IFetchUsersParams) => {
  return async (dispatch: Dispatch<IFetchUsersActions>) => {
    try {
      dispatch({ type: UsersActionTypes.FETCH_USERS });
      const response = await UsersService.getUsers(_page, _limit);
      dispatch({ type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
    } catch {
      dispatch({ type: UsersActionTypes.FETCH_USERS_FAILURE, payload: 'Ошибка!' });
    }
  };
};
