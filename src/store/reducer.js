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

      // auth_noAsk
      // auth_request
      // auth_success
      // auth_failured

    case ActionType.AUTHORIZATION_SUCCESS:
      return {
        ...state,
        authorization: {
          status: AuthorizationStatus.AUTH,
          error: null,
          data: action.payload,
        },
      };

    case ActionType.AUTHORIZATION_FAILURED:
      return {
        ...state,
        authorization: {
          status: AuthorizationStatus.NO_AUTH,
          error: action.payload,
          data: {},
        },
      };

    default:
      return state;
  }
};

export {reducer};
