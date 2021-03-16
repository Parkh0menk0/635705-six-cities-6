import React from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus} from "src/api";

const Authorization = ({authorizationStatus, authorizationInfo}) => {
  const history = useHistory();

  const handelPushLoginPage = (evt) => {
    evt.preventDefault();
    history.push(`/login`);
  };

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <span
        onClick={handelPushLoginPage}
        className="header__user-name user__name"
      >
        {authorizationInfo.email}
      </span>
    );
  }

  return (
    <span onClick={handelPushLoginPage} className="header__login">
      Sign in
    </span>
  );
};

Authorization.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authorizationInfo: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  authorizationInfo: state.authorizationInfo,
});

export {Authorization};
export default connect(mapStateToProps, null)(Authorization);
