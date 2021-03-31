import React from "react";
import {Redirect} from "react-router-dom";
import {AppRoute} from "src/const";

const withPrivateRoute = (Component, isAuth, URL = AppRoute.MAIN) => {
  const WithPrivateRoute = (props) => {
    if (isAuth) {
      return <Component {...props} />;
    }

    return <Redirect to={URL} />;
  };

  return WithPrivateRoute;
};

export default withPrivateRoute;
