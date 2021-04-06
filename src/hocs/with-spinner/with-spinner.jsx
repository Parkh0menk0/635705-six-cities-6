import React from "react";
import PropTypes from "prop-types";
import LoadingScreen from "../../components/loading-screen/loading-screen";

const withSpinner = (Component) => {
  const WithSpinner = ({isLoading, ...props}) => {

    return (
      isLoading
        ? <LoadingScreen />
        : <Component {...props} />
    );
  };

  WithSpinner.propTypes = {
    isLoading: PropTypes.bool.isRequired
  };

  return WithSpinner;
};

export default withSpinner;
