import { UserType } from "../../types/user/UserType";
import {
  FetchedLoginType,
  LoginSuccessType,
  FetchedLogoutType,
  LoginErrorType,
} from "./actionCreatorType";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const FETCHED_LOGOUT = "FETCHED_LOGOUT";
export const FETCHED_LOGIN = "FETCHED_LOGIN";

export const fetchedLogin = (): FetchedLoginType => ({
  type: FETCHED_LOGIN,
});
export const loginSuccess = (payload: UserType): LoginSuccessType => ({
  type: LOGIN_SUCCESS,
  payload
});
export const loginError = (payload: string): LoginErrorType => ({
  type: LOGIN_ERROR,
  payload,
});

export const fetchedLogout = (): FetchedLogoutType => {
  return {
    type: FETCHED_LOGOUT,
  };
};
