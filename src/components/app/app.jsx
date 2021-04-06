import React from "react";
import {useSelector} from "react-redux";
import {Switch, Route} from "react-router-dom";
import MainPageWrapper from "../pages/main-page-wrapper/main-page-wrapper";
import FavoritesPageWrapper from "../pages/favorites-page-wrapper/favorites-page-wrapper";
import LoginPage from "../pages/login-page/login-page";
import OfferPageWrapper from "../pages/offer-page-wrapper/offer-page-wrapper";
import NotFoundPage from "../pages/not-found-page/not-found-page";
import {AppRoute, AuthorizationStatus} from "../../const";
import withPrivateRoute from "../../hocs/with-private-route/with-private-route";

const App = () => {
  const authorizationStatus = useSelector((state) => state.USER.authorizationStatus);

  const SignInPagePrivate = withPrivateRoute(
      LoginPage,
      authorizationStatus === AuthorizationStatus.NO_AUTH
  );
  const FavoritePrivate = withPrivateRoute(
      FavoritesPageWrapper,
      authorizationStatus === AuthorizationStatus.AUTH,
      AppRoute.LOGIN
  );

  return (
    <Switch>
      <Route path={AppRoute.MAIN} exact>
        <MainPageWrapper />
      </Route>
      <Route path={AppRoute.LOGIN} exact>
        <SignInPagePrivate />
      </Route>
      <Route path={AppRoute.FAVORITES} exact>
        <FavoritePrivate />
      </Route>
      <Route path={AppRoute.ROOM} exact>
        <OfferPageWrapper />;
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default App;
