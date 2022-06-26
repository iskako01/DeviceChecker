import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { CreateDeviceThunk } from "../../redux/createDevice/createDeviceThunk";
import { AppStateType } from "../../redux/store";
import { DeviceType } from "../../types/device/deviceType";
import CreateDevice from "./CreateDevice";

const CreateDeviceContainer = () => {
  const dispatch =
    useDispatch<ThunkDispatch<AppStateType, {}, Action<string>>>();
  const devices = useSelector<AppStateType, DeviceType[]>(
    (state) => state.devices.devices
  );
  const navigate = useNavigate();
  const [code, setCode] = useState<string | null>("");
  const [os, setOs] = useState<string | null>("");
  const [model, setModel] = useState<string | null>("");
  const [vendor, setVendor] = useState<string | null>("");
  const [osVersion, setOsVersion] = useState<string | null>("");
  const [image, setImage] = useState<string | null>("");

  const handleChangeCode = (event: any) => {
    setCode(event.target.value);
  };
  const handleChangeOs = (event: any) => {
    setOs(event.target.value);
  };
  const ohandleChangeModel = (event: any) => {
    setModel(event.target.value);
  };
  const handleChangeVendor = (event: any) => {
    setVendor(event.target.value);
  };
  const handleChangeOsVersion = (event: any) => {
    setOsVersion(event.target.value);
  };
  const handleChangeImage = (event: any) => {
    setImage(event.target.value);
  };

  const onDeviceCreate = () => {
    dispatch(
      CreateDeviceThunk({
        id: devices.length + 1,
        code,
        os,
        model,
        vendor,
        osVersion,
        image,
      })
    ).then(() => {
      navigate("/devices");
    });
  };

  return (
    <CreateDevice
      code={code}
      os={os}
      model={model}
      vendor={vendor}
      osVersion={osVersion}
      image={image}
      handleChangeCode={handleChangeCode}
      handleChangeOs={handleChangeOs}
      ohandleChangeModel={ohandleChangeModel}
      handleChangeVendor={handleChangeVendor}
      handleChangeOsVersion={handleChangeOsVersion}
      handleChangeImage={handleChangeImage}
      onDeviceCreate={onDeviceCreate}
    />
  );
};

export default CreateDeviceContainer;
