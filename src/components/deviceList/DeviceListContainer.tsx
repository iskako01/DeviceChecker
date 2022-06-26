import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Action, compose } from "redux";
import {
  BorrowDeviceThunk,
  GetDeviceBackThunk,
  GetDevicesThunk,
} from "../../redux/deviceList/deviceListThunk";
import { DeleteDevicesThunk } from "../../redux/deleteDevice/deleteDeviceThunk";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import DeviceList from "./DeviceList";
import {
  selectSortedDevices,
  willSortedDevices,
} from "../../redux/deviceList/sortDevicesSelector";
import { AppStateType } from "../../redux/store";
import { DeviceType } from "../../types/device/deviceType";
import { ThunkDispatch } from "redux-thunk";
import { UserType } from "../../types/user/UserType";

const DeviceListContainer = () => {
  const dispatch =
    useDispatch<ThunkDispatch<AppStateType, {}, Action<string>>>();
  const devices = useSelector<AppStateType, DeviceType[]>(
    (state) => state.devices.devices
  );
  const user = useSelector<AppStateType, UserType>((state) => state.auth.user);
  const sortedDevices = useSelector(selectSortedDevices);
  const shouldSort = useSelector(willSortedDevices);

  const onDeleteDevice = (id: number) => {
    dispatch(DeleteDevicesThunk(id));
  };
  const onBorrowDevice = (id: number) => {
    dispatch(BorrowDeviceThunk(id));
  };
  const onGetDeviceBack = (id: number) => {
    dispatch(GetDeviceBackThunk(id));
  };

  useEffect(() => {
    dispatch(GetDevicesThunk());
  }, [dispatch]);

  return (
    <DeviceList
      devices={shouldSort ? sortedDevices : devices}
      user={user}
      onDeleteDevice={onDeleteDevice}
      onBorrowDevice={onBorrowDevice}
      onGetDeviceBack={onGetDeviceBack}
    />
  );
};

export default compose(withAuthRedirect(DeviceListContainer));
