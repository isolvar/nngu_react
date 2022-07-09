import { IUsers } from '../../../interfaces/IUsers';

export interface IUsersState {
  usersData: IUsers[];
  loading: boolean;
  error: string | null;
}

interface IBaseAction {
  type: string;
}

export interface ISetUsersDataAction extends IBaseAction {
  payload: IUsers[];
}

export interface ICreateUserAction extends IBaseAction {
  payload: IUsers;
}

export enum UsersActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE',
}

export interface IFetchUsersAction {
  type: UsersActionTypes.FETCH_USERS;
}

export interface IFetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS;
  payload: IUsers[];
}

export interface IFetchUsersFailureAction {
  type: UsersActionTypes.FETCH_USERS_FAILURE;
  payload: string;
}

export type IFetchUsersActions =
  | IFetchUsersAction
  | IFetchUsersSuccessAction
  | IFetchUsersFailureAction;

export interface IFetchUsersParams {
  _page: number;
  _limit: number;
}
