import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import LoginPage from "../pages/login-page/login-page";
import OfferPage from "../pages/offer-page/offer-page";
import NotFoundPage from "../pages/not-found-page/not-found-page";
import {AppRoute} from "src/const";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <MainPage />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <LoginPage />
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <FavoritesPage />
        </Route>
        <Route path={AppRoute.ROOM} exact>
          <OfferPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  reviews: PropTypes.arrayOf(PropTypes.object)
};

export default App;
