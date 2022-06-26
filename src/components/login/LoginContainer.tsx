import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { LoginThunk } from "../../redux/auth/authThunk";
import { AppStateType } from "../../redux/store";

import Login from "./Login";

const LoginContainer = () => {
  const dispatch =
    useDispatch<ThunkDispatch<AppStateType, {}, Action<string>>>();
  const isAuth = useSelector<AppStateType, boolean>(
    (state) => state.auth.isAuth
  );

  const [login, setLogin] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const onLoginRequest = (e: any) => {
    e.preventDefault();
    dispatch(LoginThunk(login, password));
  };

  const onLoginChange = (e: any) => {
    const value = e.target.value;
    setLogin(value);
  };
  const onPasswordChange = (e: any) => {
    const value = e.target.value;
    setPassword(value);
  };

  return (
    <>
      <Login
        isAuth={isAuth}
        login={login}
        password={password}
        onLoginChange={onLoginChange}
        onPasswordChange={onPasswordChange}
        onLoginRequest={onLoginRequest}
      />
    </>
  );
};

export default LoginContainer;
