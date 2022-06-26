import React from "react";

import styles from "./CreateDevice.module.scss";
import {
  Stack,
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Input,
} from "@mui/material";

import { NavLink } from "react-router-dom";

type PropsType = {
  code: string | null;
  os: string | null;
  model: string | null;
  vendor: string | null;
  osVersion: string | null;
  image: string | null;
  handleChangeCode: (e: any) => void;
  handleChangeOs: (e: any) => void;
  ohandleChangeModel: (e: any) => void;
  handleChangeVendor: (e: any) => void;
  handleChangeOsVersion: (e: any) => void;
  handleChangeImage: (e: any) => void;
  onDeviceCreate: (e: any) => void;
};

const CreateDevice: React.FC<PropsType> = ({
  code,
  os,
  model,
  vendor,
  osVersion,
  image,
  handleChangeCode,
  handleChangeOs,
  ohandleChangeModel,
  handleChangeVendor,
  handleChangeOsVersion,
  handleChangeImage,
  onDeviceCreate,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Nové zařízení</h2>
        <Stack
          component="form"
          sx={{ width: "50ch" }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <FormControl size="medium" variant="standard">
            <InputLabel htmlFor="code">
              Kodové označení(identifikátor){" "}
            </InputLabel>
            <Input
              id="code"
              aria-describedby="my-helper-text"
              value={code}
              onChange={handleChangeCode}
            />
          </FormControl>

          <FormControl size="medium" variant="standard">
            <InputLabel id="demo-simple-select-standard-label">
              Výrobce
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={vendor}
              onChange={handleChangeVendor}
              label="OS"
            >
              <MenuItem value="samsung">SAMSUNG</MenuItem>
              <MenuItem value="apple">APPLE</MenuItem>
              <MenuItem value="asus">ASUS</MenuItem>
              <MenuItem value="lenovo">LENOVO</MenuItem>
              <MenuItem value="huawei">HUAWEI</MenuItem>
              <MenuItem value="acer">ACER</MenuItem>
              <MenuItem value="xiaomi">XIAOMI</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="medium" variant="standard">
            <InputLabel htmlFor="model">Model</InputLabel>
            <Input id="model" value={model} onChange={ohandleChangeModel} />
          </FormControl>

          <FormControl size="medium" variant="standard">
            <InputLabel id="demo-simple-select-standard-label">
              Operační systém
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={os}
              onChange={handleChangeOs}
              label="OS"
            >
              <MenuItem value="ios">IOS</MenuItem>
              <MenuItem value="android">Android</MenuItem>
              <MenuItem value="windows">Windows</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="medium" variant="standard">
            <InputLabel htmlFor="osVersion">
              Verze operačního systému
            </InputLabel>
            <Input
              id="osVersion"
              value={osVersion}
              onChange={handleChangeOsVersion}
            />
          </FormControl>

          <FormControl size="medium" variant="standard">
            <InputLabel htmlFor="image"> Obrázek (URL)</InputLabel>
            <Input id="image" value={image} onChange={handleChangeImage} />
          </FormControl>

          <Button
            onClick={onDeviceCreate}
            variant="text"
            style={{ color: "#fff", backgroundColor: "#da5a38" }}
          >
            Přidat zařízení
          </Button>
          <Button
            variant="text"
            style={{ color: "#fff", backgroundColor: "#da5a38" }}
          >
            <NavLink to="/">Zpět </NavLink>
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default CreateDevice;
