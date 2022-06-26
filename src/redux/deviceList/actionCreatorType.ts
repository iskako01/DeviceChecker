import {
  GET_DEVICES,
  DEVICES_SUCCESS,
  DEVICES_ERROR,
  SORT_BY_OS,
  SORT_BY_VENDOR,
  SHOW_ALL_AVAILABLE_DEVICES,
} from "./deviceListActionCreator";
import { DeviceType } from "../../types/device/deviceType";

export type GetDevicesType = {
  type: typeof GET_DEVICES;
};

export type DeviceSuccessType = {
  type: typeof DEVICES_SUCCESS;
  payload: Array<DeviceType>;
};

export type DeviceErrorType = {
  type: typeof DEVICES_ERROR;
  payload: any;
};

export type SortDevicesByOsType = {
  type: typeof SORT_BY_OS;
  payload: string;
};

export type SortDevicesByVendorType = {
  type: typeof SORT_BY_VENDOR;
  payload: string;
};

export type ShowAllAvailableDevicesType = {
  type: typeof SHOW_ALL_AVAILABLE_DEVICES;
  payload: boolean;
};

export type ActionsType =
  | GetDevicesType
  | DeviceSuccessType
  | DeviceErrorType
  | SortDevicesByVendorType
  | ShowAllAvailableDevicesType
  | SortDevicesByOsType;
