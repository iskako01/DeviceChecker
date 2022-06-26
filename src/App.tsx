import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useEffect } from "react";
import { initThunk } from "./redux/init/initThunk";
import { Box, CircularProgress } from "@mui/material";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginContainer from "./components/login/LoginContainer";
import DeviceListContainer from "./components/deviceList/DeviceListContainer";
import CreateDeviceContainer from "./components/createDevice/CreateDeviceContainer";
import { AppStateType } from "./redux/store";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

const App = () => {
  const dispatch =
    useDispatch<ThunkDispatch<AppStateType, {}, Action<string>>>();
  const isInit = useSelector<AppStateType, boolean>(
    (state) => state.init.isInit
  );

  useEffect(() => {
    dispatch(initThunk());
  }, [dispatch]);

  return (
    <>
      {isInit ? (
        <div className="container">
          <BrowserRouter>
            <HeaderContainer />
            <Routes>
              <Route path="/login" element={<LoginContainer />} />
              <Route path="/devices" element={<DeviceListContainer />} />
              <Route
                path="/create-device"
                element={<CreateDeviceContainer />}
              />
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default App;
