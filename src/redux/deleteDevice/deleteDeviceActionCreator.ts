import { DeleteDeviceType, DeleteDeviceErrorType } from "./actionCreatorType";

export const DELETE_DEVICE = "DELETE_DEVICE";
export const DELETE_DEVICE_ERROR = "DELETE_DEVICE_ERROR";

export const deleteDevice = (): DeleteDeviceType => {
  return { type: DELETE_DEVICE };
};

export const deleteDeviceError = (payload: any): DeleteDeviceErrorType => {
  return { type: DELETE_DEVICE_ERROR, payload };
};
