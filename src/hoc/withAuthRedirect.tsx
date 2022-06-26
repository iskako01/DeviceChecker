import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../redux/store";

type MapStateToPropsType = {
  isAuth: boolean;
};

let mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component: any) => {
  class AuthRedirectComponent extends React.Component<MapStateToPropsType> {
    render() {
      if (!this.props.isAuth) {
        return <Navigate to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }
  let connectedAuthRedirectComponent = connect(mapStateToProps)(
    AuthRedirectComponent
  );

  return connectedAuthRedirectComponent;
};
