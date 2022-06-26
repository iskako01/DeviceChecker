import React from "react";
import logo from "../../assets/logo.png";
import styles from "./Header.module.scss";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { UserType } from "../../types/user/UserType";

type PropsType = {
  user: UserType;
  isAuth: boolean;
  onLogout: () => void;
};

const Header: React.FC<PropsType> = ({ user, isAuth, onLogout }) => {
  return (
    <div className="">
      <div className={styles.header}>
        <div className={styles.header__logo}>
          <img src={logo} alt="" />
          <div>Device Checker</div>
        </div>

        <div className={styles.header__info}>
          <div className={styles.header__info_login}>
            {isAuth ? user.login : ""}
          </div>
          <div className={styles.header__info_login}>
            {user.type === "admin" && (
              <Button
                size="large"
                variant="text"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                }}
              >
                <NavLink to="/create-device">Přidat zařízení </NavLink>
              </Button>
            )}
          </div>
          <div>
            {isAuth ? (
              <Button
                size="large"
                variant="text"
                onClick={onLogout}
                style={{
                  backgroundColor: "white",
                  width: "100%",
                }}
              >
                <NavLink to="/">Odhlásit</NavLink>
              </Button>
            ) : (
              <Button
                size="large"
                variant="text"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  width: "100px",
                }}
              >
                <NavLink to="/">Přihlásit</NavLink>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
