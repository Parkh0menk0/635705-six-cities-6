import {ActionType} from "./action";
import {SORT_LIST} from "src/const";
import {AuthorizationStatus} from "src/api";

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
        sortOption: SORT_LIST[0],
      };

    case ActionType.SET_SORT_OPTION:
      return {
        ...state,
        sortOption: action.payload,
      };

    case ActionType.HOVER_OFFER:
      return {
        ...state,
        activeOfferId: action.payload,
      };

    case ActionType.OFFERS_REQUEST:
      return {
        ...state,
        offers: {
          data: null,
          loading: true,
          error: null,
        },
      };

    case ActionType.OFFERS_SUCCESS:
      return {
        ...state,
        offers: {
          data: action.payload,
          loading: false,
          error: null,
        },
      };

    case ActionType.OFFERS_FAILURE:
      return {
        ...state,
        offers: {
          data: null,
          loading: false,
          error: action.payload,
        },
      };

    case ActionType.AUTHORIZATION_SUCCESS:
      return {
        ...state,
        user: {
          status: AuthorizationStatus.AUTH,
          data: action.payload,
        },
      };

    case ActionType.AUTHORIZATION_FAILURED:
      return {
        ...state,
        user: {
          status: AuthorizationStatus.NO_AUTH,
          data: null,
        },
      };

    case ActionType.LOAD_OFFER:
      return {
        ...state,
        openedOffer: action.payload,
      };

    case ActionType.NEAR_OFFERS_SUCCESS:
      return {
        ...state,
        nearOffers: {
          data: action.payload,
          loading: false,
          error: null,
        },
      };

    case ActionType.NEAR_OFFERS_REQUEST:
      return {
        ...state,
        nearOffers: {
          data: null,
          loading: true,
          error: null,
        },
      };

    case ActionType.NEAR_OFFERS_FAILURE:
      return {
        ...state,
        nearOffers: {
          data: null,
          loading: false,
          error: action.payload,
        },
      };

    case ActionType.REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: {
          data: action.payload,
          loading: false,
          error: null,
        },
      };

    case ActionType.REVIEWS_REQUEST:
      return {
        ...state,
        reviews: {
          data: null,
          loading: true,
          error: null,
        },
      };

    case ActionType.REVIEWS_FAILURE:
      return {
        ...state,
        reviews: {
          data: null,
          loading: false,
          error: action.payload,
        },
      };

    case ActionType.FAVORITE_OFFERS_SUCCESS:
      return {
        ...state,
        favoriteOffers: {
          data: action.payload,
          loading: false,
          error: null,
        },
      };

    case ActionType.FAVORITE_OFFERS_REQUEST:
      return {
        ...state,
        favoriteOffers: {
          data: null,
          loading: true,
          error: null,
        },
      };

    case ActionType.FAVORITE_OFFERS_FAILURE:
      return {
        ...state,
        favoriteOffers: {
          data: null,
          loading: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

export {reducer};
