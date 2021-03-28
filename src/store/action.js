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
  REVIEWS_REQUEST: `reviews/request`,
  REVIEWS_SUCCESS: `reviews/success`,
  REVIEWS_FAILURE: `reviews/failure`,
  FAVORITE_OFFERS_REQUEST: `favoriteOffers/request`,
  FAVORITE_OFFERS_SUCCESS: `favoriteOffers/success`,
  FAVORITE_OFFERS_FAILURE: `favoriteOffers/failure`,
  NEAR_OFFERS_REQUEST: `nearOffers/request`,
  NEAR_OFFERS_SUCCESS: `nearOffers/success`,
  NEAR_OFFERS_FAILURE: `nearOffers/failure`,
  TOGGLE_FAVORITE: `favoriteOffers/toggleFavorite`,
  TOGGLE_OPENED_CARD_FAVORITE: `favoriteOffers/toggleOpenedCardFavorite`,
  ADD_TO_FAVORITE: `favoriteOffers/addToFavorite`,
  REMOVE_FROM_FAVORITE: `favoriteOffers/removeFromFavorite`,
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
  toggleFavorite: (id) => ({
    type: ActionType.TOGGLE_FAVORITE,
    payload: id
  }),
  toggleOpenedCardFavorite: () => ({
    type: ActionType.TOGGLE_OPENED_CARD_FAVORITE
  }),
  addToFavorite: (offer) => ({
    type: ActionType.ADD_TO_FAVORITE,
    payload: offer
  }),
  removeFromFavorite: (id) => ({
    type: ActionType.REMOVE_FROM_FAVORITE,
    payload: id
  }),
};

const ReviewActionCreator = {
  loadReviewsSuccess: (reviews) => ({
    type: ActionType.REVIEWS_SUCCESS,
    payload: reviews
  }),
  requestReviews: () => ({
    type: ActionType.REVIEWS_REQUEST,
  }),
  loadReviewsFailure: (error) => ({
    type: ActionType.REVIEWS_FAILURE,
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
  ...ReviewActionCreator,
};
