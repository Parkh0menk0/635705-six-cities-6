import {ActionCreator} from "./action";
import {APIRoutes, AppRoute} from "src/const";

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
      const {response} = err;
      switch (response.status) {
        case 404:
          dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND));
          break;

        default:
          throw err;
      }
    });

export const fetchNearOffers = (id) => (dispatch, _getState, api) =>
  api
    .get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadNearOffers(data)));

export const fetchReviews = (id) => (dispatch, _getState, api) =>
  api
    .get(`comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.laodReviews(data)));

export const fetchFavoriteOffers = () => (dispatch, _getState, api) =>
  api
    .get(APIRoutes.FAVORITES)
    .then(({data}) => dispatch(ActionCreator.loadFavorite(data)));

export const submitComment = (id, {review: comment, rating}) => (
    dispatch,
    _getState,
    api
) =>
  api
    .post(`${APIRoutes.REVIEWS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(ActionCreator.laodReviews(data)));

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
