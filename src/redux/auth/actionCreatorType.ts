import {
  LOGIN_SUCCESS,
  FETCHED_LOGOUT,
  FETCHED_LOGIN,
  LOGIN_ERROR,
} from "./authActionCreator";
import { UserType } from "../../types/user/UserType";

export type LoginSuccessType = {
  type: typeof LOGIN_SUCCESS;
  payload: UserType;
};
export type FetchedLogoutType = {
  type: typeof FETCHED_LOGOUT;
};
export type FetchedLoginType = {
  type: typeof FETCHED_LOGIN;
};
export type LoginErrorType = {
  [x: string]: any;
  type: typeof LOGIN_ERROR;
};

export type ActionsType =
  | LoginSuccessType
  | FetchedLogoutType
  | LoginErrorType
  | FetchedLoginType;
