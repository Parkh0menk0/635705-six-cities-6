import {ActionCreator} from "./action";
import {APIRoutes, AppRoute} from "src/const";
import {notExisteOffer} from "src/api";

export const fetchOffersList = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.requestOffers());
  api
    .get(APIRoutes.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffersSuccess(data)))
    .catch((e) => dispatch(ActionCreator.loadOffersFailure(e)));
};

export const fetchOffer = (id) => (dispatch, _getState, api) =>
  api
    .get(`/hotels/` + id)
    .then(({data}) => dispatch(ActionCreator.loadOffer(data)))
    .catch((err) => {
      notExisteOffer(err, () =>
        dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND))
      );
    });

export const fetchNearOffers = (id) => (dispatch, _getState, api) =>
  api
    .get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadNearOffersSuccess(data)))
    .catch((e) => dispatch(ActionCreator.loadNearOffersFailure(e)));

export const fetchReviews = (id) => (dispatch, _getState, api) =>
  api
    .get(`comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviewsSuccess(data)));

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.requestFavoriteOffers());
  api
    .get(APIRoutes.FAVORITES)
    .then(({data}) => dispatch(ActionCreator.loadFavoriteOffersSuccess(data)))
    .catch((e) => dispatch(ActionCreator.loadFavoriteOffersFailure(e)));
};

export const submitComment = (id, {review: comment, rating}) => (
    dispatch,
    _getState,
    api
) =>
  api
    .post(`${APIRoutes.REVIEWS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(ActionCreator.loadReviewsSuccess(data)))
    .catch(() => dispatch(ActionCreator.laodReviewsFailured()));

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
