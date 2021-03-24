export const ActionType = {
  SET_CITY: `city/setCity`,
  SET_SORT_OPTION: `sortOption/setSortOption`,
  HOVER_OFFER: `offer/hoverOffer`,
  OFFERS_REQUEST: `offers/request`,
  OFFERS_SUCCESS: `offers/success`,
  OFFERS_FAILURE: `offers/failure`,
  REDIRECT_TO_ROUTE: `/redirectToRoute`,
  AUTHORIZATION_SUCCESS: `auth/success`,
  AUTHORIZATION_FAILURED: `auth/failured`,
  LOAD_OFFER: `data/loadOffer`,
  LOAD_REVIEWS: `data/laodReviews`,
  FAVORITE_OFFERS_REQUEST: `favoriteOffers/request`,
  FAVORITE_OFFERS_SUCCESS: `favoriteOffers/success`,
  FAVORITE_OFFERS_FAILURE: `favoriteOffers/failure`,
  NEAR_OFFERS_REQUEST: `nearOffers/request`,
  NEAR_OFFERS_SUCCESS: `nearOffers/success`,
  NEAR_OFFERS_FAILURE: `nearOffers/failure`,
};

const OfferActionCreator = {
  requestOffers: () => ({
    type: ActionType.OFFERS_REQUEST,
  }),
  loadOffersSuccess: (offers) => ({
    type: ActionType.OFFERS_SUCCESS,
    payload: offers
  }),
  loadOffersFailure: (error) => ({
    type: ActionType.OFFERS_FAILURE,
    payload: error
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer
  }),
  requestNearOffers: () => ({
    type: ActionType.NEAR_OFFERS_REQUEST,
  }),
  loadNearOffersSuccess: (offers) => ({
    type: ActionType.NEAR_OFFERS_SUCCESS,
    payload: offers
  }),
  loadNearOffersFailure: (error) => ({
    type: ActionType.NEAR_OFFERS_FAILURE,
    payload: error
  }),
  laodReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  }),
  requestFavoriteOffers: () => ({
    type: ActionType.FAVORITE_OFFERS_REQUEST,
  }),
  loadFavoriteOffersSuccess: (offers) => ({
    type: ActionType.FAVORITE_OFFERS_SUCCESS,
    payload: offers
  }),
  loadFavoriteOffersFailure: (error) => ({
    type: ActionType.FAVORITE_OFFERS_FAILURE,
    payload: error
  }),
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city
  }),
  setSortOption: (sortOption) => ({
    type: ActionType.SET_SORT_OPTION,
    payload: sortOption
  }),
  hoverOffer: (id) => ({
    type: ActionType.HOVER_OFFER,
    payload: id
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  }),
  authorizationSuccess: (info) => ({
    type: ActionType.AUTHORIZATION_SUCCESS,
    payload: info
  }),
  authorizationFailured: () => ({
    type: ActionType.AUTHORIZATION_FAILURED,
  }),
  ...OfferActionCreator,
};
