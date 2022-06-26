import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Input,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchPanel = ({
  os,
  vendor,
  checked,
  handleChangeAvailable,
  handleChangeOs,
  handleChangeVendor,
  setSearchValue,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ flexGrow: 1, backgroundColor: "transparent" }}
        position="static"
      >
        <Toolbar>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Systém
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={os}
              onChange={handleChangeOs}
              label="OS"
            >
              <MenuItem value="all">Nezáleží</MenuItem>
              <MenuItem value="ios">IOS</MenuItem>
              <MenuItem value="android">Android</MenuItem>
              <MenuItem value="windows">Windows</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 200 }}>
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
              <MenuItem value="all">Nezáleží</MenuItem>
              <MenuItem value="samsung">SAMSUNG</MenuItem>
              <MenuItem value="apple">APPLE</MenuItem>
              <MenuItem value="asus">ASUS</MenuItem>
              <MenuItem value="lenovo">LENOVO</MenuItem>
              <MenuItem value="huawei">HUAWEI</MenuItem>
              <MenuItem value="acer">ACER</MenuItem>
              <MenuItem value="xiaomi">XIAOMI</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "#000",
            }}
            control={
              <Checkbox checked={checked} onChange={handleChangeAvailable} />
            }
            label="Jen dostupné"
          />

          <SearchIcon sx={{ color: "#000" }} />
          <Input
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Hledat model"
          ></Input>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SearchPanel;
