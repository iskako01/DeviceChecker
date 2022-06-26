import { ThunkAction } from "redux-thunk";
import { authAPI } from "../../api/Api";
import { IdKey, tokenKey } from "../../utils/constants";
import { getTokenFromLocalStorage } from "../../utils/localStorage";
import { loginSuccess, loginError } from "../auth/authActionCreator";
import { AppStateType } from "../store";
import { ActionsType, initialize } from "./initActionCreator";

export const initThunk =
  (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> =>
  async (dispatch) => {
    const token = getTokenFromLocalStorage(tokenKey);
    const id = getTokenFromLocalStorage(IdKey);
    try {
      const { data } = await authAPI.authMe(token, id);
      dispatch(loginSuccess(data));
    } catch (error: any) {
      dispatch(loginError(error.response.data.error));
    } finally {
      dispatch(initialize());
    }
  };
