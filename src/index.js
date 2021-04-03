import React from "react";
import ReactDOM from "react-dom";
import {configureStore} from "@reduxjs/toolkit";
import {createAPI} from "src/api";
import {Provider} from "react-redux";
import App from "./components/app/app";
import rootReducer from "./store/root-reducer";
import {AuthorizationStatus} from "src/api";
import {requireAuthorization} from "src/store/action";
import {checkAuth} from "src/store/api-actions";
import {redirect} from "./store/middlewares/redirect";
import Error from "./components/error/error";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    }).concat(redirect)
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <Error />
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
