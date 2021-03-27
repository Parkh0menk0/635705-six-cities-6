import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from "./components/app/app";
import {reducer} from "./store/reducer";
import {CITIES, SORT_LIST} from "./const";
import {ActionCreator} from "./store/action";
import {checkAuth} from "./store/api-actions";
import {createAPI, AuthorizationStatus} from "./api";
import {redirect} from "src/store/middlewares/redirect";

const preloadedState = {
  city: CITIES[0],
  sortOption: SORT_LIST[0],
  activeOfferId: null,
  offers: {
    data: null,
    loading: false,
    error: null,
  },
  user: {
    status: AuthorizationStatus.NO_AUTH,
    data: null,
  },
  openedOffer: null,
  nearOffers: {
    data: null,
    loading: false,
    error: null,
  },
  reviews: {
    data: null,
    loading: false,
    error: null,
  },
  favoriteOffers: {
    data: null,
    loading: false,
    error: null,
  },
};

const api = createAPI(() =>
  store.dispatch(
      ActionCreator.authorizationFailured()
  )
);

const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth()).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
});
