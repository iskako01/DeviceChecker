import {
  DELETE_DEVICE,
  DELETE_DEVICE_ERROR,
} from "./deleteDeviceActionCreator";

export type DeleteDeviceType = {
  type: typeof DELETE_DEVICE;
};
export type DeleteDeviceErrorType = {
  type: typeof DELETE_DEVICE_ERROR;
  payload: any;
};
export type ActionsType = DeleteDeviceType | DeleteDeviceErrorType;
