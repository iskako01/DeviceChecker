import { ActionsType, createDevice } from "./createDeviceActionCreator";
import { tokenKey } from "../../utils/constants";
import { getTokenFromLocalStorage } from "../../utils/localStorage";
import { devicesAPI } from "../../api/Api";
import { GetDevicesThunk } from "../deviceList/deviceListThunk";
import { DeviceType } from "../../types/device/deviceType";
import { AppStateType } from "../store";
import { ThunkAction } from "redux-thunk";

export const CreateDeviceThunk =
  ({
    id,
    code,
    os,
    vendor,
    model,
    osVersion,
    image,
  }: DeviceType): ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    ActionsType
  > =>
  async (dispatch) => {
    const token = getTokenFromLocalStorage(tokenKey);
    try {
      const { data } = await devicesAPI.createDevice(token, {
        id,
        code,
        os,
        vendor,
        model,
        osVersion,
        image,
      });

      dispatch(createDevice(data));
      dispatch(GetDevicesThunk());
    } catch (error) {
      console.log(error);
    }
  };
