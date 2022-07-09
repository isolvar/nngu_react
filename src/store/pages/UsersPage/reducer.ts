import { RESET_USER_STORE } from './actions';
import { IUsersState, UsersActionTypes } from './interfaces';

const initialState: IUsersState = {
  usersData: [],
  loading: false,
  error: null,
};

export const UsersReducer = (state: IUsersState = initialState, action: any): IUsersState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS:
      return { ...state, loading: true };
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, usersData: [...action.payload] };
    case UsersActionTypes.FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case RESET_USER_STORE:
      return initialState;
    default:
      return state;
  }
};
