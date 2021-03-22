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
