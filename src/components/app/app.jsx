import React from "react";
import {useSelector} from "react-redux";
import {Switch, Route} from "react-router-dom";
import MainPageWrapper from "src/components/pages/main-page-wrapper/main-page-wrapper";
import FavoritesPageWrapper from "src/components/pages/favorites-page-wrapper/favorites-page-wrapper";
import LoginPage from "src/components/pages/login-page/login-page";
import OfferPageWrapper from "src/components/pages/offer-page-wrapper/offer-page-wrapper";
import NotFoundPage from "src/components/pages/not-found-page/not-found-page";
import {AppRoute} from "src/const";
import withPrivateRoute from "src/hocs/with-private-route/with-private-route";
import {AuthorizationStatus} from "src/api";

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
