import {
  GetDevicesType,
  DeviceSuccessType,
  DeviceErrorType,
  SortDevicesByVendorType,
  ShowAllAvailableDevicesType,
  SortDevicesByOsType,
} from "./actionCreatorType";
import { DeviceType } from "../../types/device/deviceType";

export const GET_DEVICES = "GET_DEVICES";
export const DEVICES_SUCCESS = "DEVICES_SUCCESS";
export const DEVICES_ERROR = "DEVICES_ERROR";
export const SORT_BY_OS = "SORT_BY_OS";
export const SORT_BY_VENDOR = "SORT_BY_VENDOR";
export const SHOW_ALL_AVAILABLE_DEVICES = "SHOW_ALL_AVAILABLE_DEVICES";

export const getDevices = (): GetDevicesType => {
  return { type: GET_DEVICES };
};

export const deviceSuccess = (
  payload: Array<DeviceType>
): DeviceSuccessType => {
  return { type: DEVICES_SUCCESS, payload };
};

export const deviceError = (payload: any): DeviceErrorType => {
  return { type: DEVICES_ERROR, payload };
};
export const sortDevicesByOs = (payload: string): SortDevicesByOsType => {
  return { type: SORT_BY_OS, payload };
};

export const sortDevicesByVendor = (
  payload: string
): SortDevicesByVendorType => {
  return { type: SORT_BY_VENDOR, payload };
};

export const showAllAvailableDevices = (
  payload: boolean
): ShowAllAvailableDevicesType => {
  return { type: SHOW_ALL_AVAILABLE_DEVICES, payload };
};
