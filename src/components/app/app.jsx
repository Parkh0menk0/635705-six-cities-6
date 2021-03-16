import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import browserHistory from "src/browser-history";
import MainPage from "src/components/pages/main-page/main-page";
import FavoritesPage from "src/components/pages/favorites-page/favorites-page";
import LoginPage from "src/components/pages/login-page/login-page";
import OfferPage from "src/components/pages/offer-page/offer-page";
import NotFoundPage from "src/components/pages/not-found-page/not-found-page";
import {AppRoute} from "src/const";
import PrivateRoute from "src/components/private-route/private-route";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <MainPage />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <LoginPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <FavoritesPage />}
        ></PrivateRoute>
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
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export default App;
