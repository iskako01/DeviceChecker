import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  showAllAvailableDevices,
  sortDevicesByOs,
  sortDevicesByVendor,
} from "../../../redux/deviceList/deviceListActionCreator";
import SearchPanel from "./SearchPanel";

type PropsType = {
  setSearchValue: (e: any) => void;
};

const SearchPanelContainer: React.FC<PropsType> = ({ setSearchValue }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [os, setOs] = useState("all");
  const [vendor, setVendor] = useState("all");

  const handleChangeAvailable = () => {
    dispatch(showAllAvailableDevices(!checked));
    setChecked((prev) => !prev);
  };

  const handleChangeOs = (event: any) => {
    const selectedOs = event.target.value;
    setOs(selectedOs);
    dispatch(sortDevicesByOs(selectedOs));
  };

  const handleChangeVendor = (event: any) => {
    const selectedVendor = event.target.value;
    setVendor(selectedVendor);
    dispatch(sortDevicesByVendor(selectedVendor));
  };

  return (
    <SearchPanel
      os={os}
      vendor={vendor}
      checked={checked}
      handleChangeAvailable={handleChangeAvailable}
      handleChangeOs={handleChangeOs}
      handleChangeVendor={handleChangeVendor}
      setSearchValue={setSearchValue}
    />
  );
};

export default SearchPanelContainer;
