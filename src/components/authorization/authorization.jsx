import React from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus} from "src/api";

const Authorization = ({authorization}) => {
  const {status, data} = authorization;
  const history = useHistory();

  const handelPushLoginPage = (evt) => {
    evt.preventDefault();
    history.push(`/login`);
  };

  if (status === AuthorizationStatus.AUTH) {
    return (
      <span
        onClick={handelPushLoginPage}
        className="header__user-name user__name"
      >
        {data.email}
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
  authorization: PropTypes.shape({
    status: PropTypes.string,
    error: PropTypes.string,
    data: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string,
    }),
  }),
};

const mapStateToProps = (state) => ({
  authorization: state.authorization,
});

export {Authorization};
export default connect(mapStateToProps, null)(Authorization);
