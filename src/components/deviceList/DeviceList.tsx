import React, { useState } from "react";
import { DeviceType } from "../../types/device/deviceType";
import { UserType } from "../../types/user/UserType";
import DeviceItem from "./DeviceItem";
import styles from "./DeviceList.module.scss";
import SearchPanelContainer from "./deviceSearchPanel/SearchPanelContainer";

type PropsType = {
  devices: DeviceType[];
  user: UserType;
  onDeleteDevice: (id: number) => void;
  onBorrowDevice: (id: number) => void;
  onGetDeviceBack: (id: number) => void;
};

const DeviceList: React.FC<PropsType> = ({
  devices,
  user,
  onDeleteDevice,
  onBorrowDevice,
  onGetDeviceBack,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const devicesSearch = devices.filter((device) => {
    return device.model?.toUpperCase().includes(searchValue?.toUpperCase());
  });

  return (
    <>
      <div>
        <SearchPanelContainer setSearchValue={setSearchValue} />
      </div>
      <div className={styles.devices}>
        {devicesSearch.map((device) => (
          <DeviceItem
            device={device}
            key={device.code}
            user={user}
            onDeleteDevice={onDeleteDevice}
            onBorrowDevice={onBorrowDevice}
            onGetDeviceBack={onGetDeviceBack}
          />
        ))}
      </div>
    </>
  );
};

export default DeviceList;
