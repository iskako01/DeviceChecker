import { DeviceType } from "../../types/device/deviceType";

export const CREATE_DEVICE = "CREATE_DEVICES";

type CreateDeviceType = {
  type: typeof CREATE_DEVICE;
  payload: DeviceType;
};

export type ActionsType = CreateDeviceType;

export const createDevice = (payload: DeviceType): CreateDeviceType => {
  return { type: CREATE_DEVICE, payload };
};
