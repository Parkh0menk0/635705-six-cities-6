import {data} from "./data";
import {APIRoute, EMPTY_OFFER, REVIEW} from "../../const";
import {ActionType, setFavoriteLoading, setOfferLoading} from "../action";
import MockAdapter from "axios-mock-adapter";
import {
  fetchComments,
  fetchFavorite,
  fetchOffer,
  fetchOffersList,
  fetchNearOffers,
  sendReview
} from "../api-actions";
import {createAPI} from "../../api";

const api = createAPI(() => {});

describe(`Reducers 'data' work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(data(undefined, {}))
      .toEqual({
        offers: [],
        isOfferListLoading: true,
        offer: EMPTY_OFFER,
        isOfferLoading: true,
        comments: [],
        offersNearby: [],
        favorites: [],
        isFavoriteLoading: true,
      });
  });

  it(`Reducer should set offer loading status correctly`, () => {
    const state = {
      offers: [],
      isOfferListLoading: true,
      offer: EMPTY_OFFER,
      isOfferLoading: true,
      comments: [],
      offersNearby: [],
      favorites: [],
      isFavoriteLoading: false,
    };

    expect(data(state, setOfferLoading(false)))
      .toEqual({
        offers: [],
        isOfferListLoading: true,
        offer: EMPTY_OFFER,
        isOfferLoading: false,
        comments: [],
        offersNearby: [],
        favorites: [],
        isFavoriteLoading: false,
      });
  });

  it(`Reducer should set favorite loading status correctly`, () => {
    const state = {
      offers: [],
      isOfferListLoading: true,
      offer: EMPTY_OFFER,
      isOfferLoading: true,
      comments: [],
      offersNearby: [],
      favorites: [],
      isFavoriteLoading: true,
    };

    expect(data(state, setFavoriteLoading(false)))
      .toEqual({
        offers: [],
        isOfferListLoading: true,
        offer: EMPTY_OFFER,
        isOfferLoading: true,
        comments: [],
        offersNearby: [],
        favorites: [],
        isFavoriteLoading: false,
      });
  });
});

describe(`Async operations work correctly`, () => {
  it(`Should make a correct API call (GET) to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, [EMPTY_OFFER, EMPTY_OFFER]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [EMPTY_OFFER, EMPTY_OFFER]
        });
      });
  });

  it(`Should make a correct API call (GET) to /hotels/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = fetchOffer(34);

    apiMock
      .onGet(APIRoute.OFFER.replace(`:id`, 34))
      .reply(200, EMPTY_OFFER);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_OFFER_LOADIGN,
          payload: true
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_OFFER,
          payload: EMPTY_OFFER
        });

      });
  });

  it(`Should make a correct API call (GET) to /comments/:hotel_id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchComments(43);

    apiMock
      .onGet(APIRoute.COMMENTS.replace(`:id`, 43))
      .reply(200, [REVIEW, REVIEW]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [REVIEW, REVIEW]
        });
      });
  });

  it(`Should make a correct API call (GET) to /hotels/:id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchNearOffers(44);

    apiMock
      .onGet(APIRoute.NEARBY.replace(`:id`, 44))
      .reply(200, [EMPTY_OFFER, EMPTY_OFFER]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_NEARBY,
          payload: [EMPTY_OFFER, EMPTY_OFFER]
        });
      });
  });

  it(`Should make a correct API call (GET) to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = fetchFavorite();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, [EMPTY_OFFER, EMPTY_OFFER]);

    return favoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_FAVORITE_LOADIGN,
          payload: true
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_FAVORITE,
          payload: [EMPTY_OFFER, EMPTY_OFFER]
        });
      });
  });

  it(`Should make a correct API call (POST) to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeReview = {
      comment: `******* Review more than 50 characters length ********`,
      rating: 4
    };
    const reviewSender = sendReview(55, fakeReview);

    apiMock
      .onPost(APIRoute.COMMENTS.replace(`:id`, 55))
      .reply(200, [REVIEW, REVIEW]);

    return reviewSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [REVIEW, REVIEW],
        });
      });
  });
});


