import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import Header from "src/components/layout/header/header";
import AuthorizationForm from "src/components/authorization/form";
import {AuthorizationStatus} from "src/api";

const LoginPage = ({user}) => {

  const history = useHistory();

  if (user.status === AuthorizationStatus.AUTH) {
    history.push(`/`);
  }

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <AuthorizationForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

LoginPage.propTypes = {
  user: PropTypes.shape({
    status: PropTypes.string,
    data: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string,
    }),
  }),
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {LoginPage};
export default connect(mapStateToProps)(LoginPage);
