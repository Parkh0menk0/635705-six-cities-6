import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "src/const";
import {AuthorizationStatus} from "src/api";

const PrivateRoute = ({render, path, exact, authorization}) => {
  const {status} = authorization;
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return status === AuthorizationStatus.AUTH
          ? render(routeProps)
          : <Redirect to={AppRoute.LOGIN} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorization: PropTypes.shape({
    status: PropTypes.string,
    error: PropTypes.string,
    data: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string,
    }),
  }),
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorization: state.authorization,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
