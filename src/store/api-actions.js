import {ActionCreator} from "./action";
import {APIRoutes} from "src/const";

export const fetchOffersList = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.requestOffers());
  api
    .get(APIRoutes.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffersSuccess(data)))
    .catch((e) => dispatch(ActionCreator.loadOffersFailure(e)));
};

export const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get(APIRoutes.LOGIN)
    .then(({data}) => dispatch(ActionCreator.authorizationSuccess(data)))
    .catch(() => dispatch(ActionCreator.authorizationFailured()));

export const login = ({login: email, password}) => (
    dispatch,
    _getState,
    api
) =>
  api
    .post(APIRoutes.LOGIN, {email, password})
    .then(({data}) => dispatch(ActionCreator.authorizationSuccess(data)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
    .catch(() => dispatch(ActionCreator.authorizationFailured()));
