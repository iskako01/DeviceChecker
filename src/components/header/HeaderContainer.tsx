import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { LogoutThunk } from "../../redux/auth/authThunk";
import { AppStateType } from "../../redux/store";
import { UserType } from "../../types/user/UserType";
import Header from "./Header";

const HeaderContainer = () => {
  const dispatch =
    useDispatch<ThunkDispatch<AppStateType, {}, Action<string>>>();
  const isAuth = useSelector<AppStateType, boolean>(
    (state) => state.auth.isAuth
  );
  const user = useSelector<AppStateType, UserType>((state) => state.auth.user);

  const onLogout = () => {
    dispatch(LogoutThunk());
  };

  return <Header isAuth={isAuth} user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
