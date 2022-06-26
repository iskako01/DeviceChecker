import { IdKey, tokenKey } from "../../utils/constants";
import { addDataToLocalStorage } from "../../utils/localStorage";
import { authAPI } from "../../api/Api";
import { AppStateType } from "../store";
import {
  fetchedLogin,
  loginSuccess,
  fetchedLogout,
  loginError,
} from "./authActionCreator";
import { ActionsType } from "./actionCreatorType";
import { ThunkAction } from "redux-thunk";


export const LoginThunk =
  (
    login: string | null,
    password: string | null
  ): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> =>
  async (dispatch) => {
    dispatch(fetchedLogin());
    try {
      const { data } = await authAPI.login(login, password);
      console.log(data);
      addDataToLocalStorage(tokenKey, data.token);
      addDataToLocalStorage(IdKey, data.id);
      dispatch(loginSuccess(data));
    } catch (error: any) {
      dispatch(loginError(error.response.data.error));
    }
  };

export const LogoutThunk =
  (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> =>
  async (dispatch) => {
    dispatch(fetchedLogout());
    localStorage.clear();
  };
