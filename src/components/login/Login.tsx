import React from "react";
import { Box, Input, Button } from "@mui/material";
import styles from "./Login.module.scss";
import { Navigate } from "react-router-dom";

type PropsType = {
  isAuth: boolean;
  login: string | null;
  password: string | null;
  onLoginRequest: (e: any) => void;
  onLoginChange: (e: any) => void;
  onPasswordChange: (e: any) => void;
};

const Login: React.FC<PropsType> = ({
  isAuth,
  login,
  password,
  onLoginRequest,
  onLoginChange,
  onPasswordChange,
}) => {
  if (isAuth) {
    return <Navigate to={"/devices"} />;
  }

  return (
    <div className={styles.login}>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1 } }}
        noValidate
        autoComplete="off"
      >
        <h2>Přihlášení</h2>
        <Input
          type="email"
          onChange={onLoginChange}
          defaultValue={login}
          placeholder="Přihlášovací jmeno"
        />
        <Input
          type="password"
          onChange={onPasswordChange}
          defaultValue={password}
          placeholder="Heslo"
        />
        <Button
          size="small"
          onClick={onLoginRequest}
          className={styles.loginBtn}
          variant="contained"
        >
          Přihlásit se
        </Button>
      </Box>
    </div>
  );
};

export default Login;
