import { deleteDevice, deleteDeviceError } from "./deleteDeviceActionCreator";
import { tokenKey } from "../../utils/constants";
import { getTokenFromLocalStorage } from "../../utils/localStorage";
import { devicesAPI } from "../../api/Api";
import { GetDevicesThunk } from "../deviceList/deviceListThunk";
import { ActionsType } from "./actionCreatorType";
import { AppStateType } from "../store";
import { ThunkAction } from "redux-thunk";


export const DeleteDevicesThunk =
  (
    id: number
  ): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> =>
  async (dispatch) => {
    const token = getTokenFromLocalStorage(tokenKey);
    try {
      await devicesAPI.deleteDevice(token, id);

      dispatch(deleteDevice());
      dispatch(GetDevicesThunk());
    } catch (error: any) {
      dispatch(deleteDeviceError(error.response.data.error));
    }
  };
