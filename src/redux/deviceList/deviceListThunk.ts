import {
  getDevices,
  deviceSuccess,
  deviceError,
} from "./deviceListActionCreator";
import { tokenKey } from "../../utils/constants";
import { getTokenFromLocalStorage } from "../../utils/localStorage";
import { devicesAPI } from "../../api/Api";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../store";
import { ActionsType } from "./actionCreatorType";

export const GetDevicesThunk =
  (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> =>
  async (dispatch) => {
    dispatch(getDevices());
    const token = getTokenFromLocalStorage(tokenKey);
    try {
      const data = await devicesAPI.getDevices(token);

      dispatch(deviceSuccess(data));
    } catch (error: any) {
      dispatch(deviceError(error.response.data.error));
    }
  };
  
export const BorrowDeviceThunk =
  (
    id: number
  ): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> =>
  async (dispatch) => {
    const token = getTokenFromLocalStorage(tokenKey);
    try {
      await devicesAPI.borrowDevice(token, id);

      dispatch(GetDevicesThunk());
    } catch (error: any) {
      dispatch(deviceError(error.response.data.error));
    }
  };

export const GetDeviceBackThunk =
  (
    id: number
  ): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> =>
  async (dispatch) => {
    const token = getTokenFromLocalStorage(tokenKey);
    try {
      await devicesAPI.getDeviceBack(token, id);

      dispatch(GetDevicesThunk());
    } catch (error: any) {
      dispatch(deviceError(error.response.data.error));
    }
  };
