import { AppStateType } from "../store";

export const selectDeviceReducer = (state: AppStateType) => state.devices;

export const willSortedDevices = (state: AppStateType) => {
  const { sortOs, sortVendor, available } = selectDeviceReducer(state);
  return sortOs !== "all" || sortVendor !== "all" || available;
};

export const selectSortedDevices = (state: AppStateType) => {
  const { sortOs, sortVendor, devices, available } = selectDeviceReducer(state);
  let sortedDevices: string | any[] = [];

  if (sortOs !== "all") {
    sortedDevices = [
      ...devices.filter(
        (device) => device.os?.toLowerCase() === sortOs.toLowerCase()
      ),
    ];
  }
  if (sortVendor !== "all") {
    sortedDevices = [
      ...devices.filter(
        (device) => device.vendor?.toLowerCase() === sortVendor.toLowerCase()
      ),
    ];
  }

  if (sortOs !== "all" && sortVendor !== "all") {
    sortedDevices = [
      ...devices.filter(
        (device) =>
          device.os?.toLowerCase() === sortOs.toLowerCase() &&
          device.vendor?.toLowerCase() === sortVendor.toLowerCase()
      ),
    ];
  }

  if (available) {
    const areSortedDevices =
      sortedDevices.length && sortOs !== "all" && sortVendor !== "all";
    const sortingArray = areSortedDevices ? sortedDevices : devices;
    sortedDevices = sortingArray.filter(
      (device) => !Boolean(device.borrowed?.user)
    );
  }

  return sortedDevices;
};
