import {NameSpace} from "src/store/root-reducer";
import {createSelector} from "reselect";
import {getLocationCity, getSortType} from "src/store/app/selectors";
import {sortOffers} from "src/utils/sort";
import {getOffersByLocation} from "src/utils/place";
import {VISIBLE_OFFERS_NEARBY_COUNT} from "src/const";

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getOfferListLoadedStatus = (state) => state[NameSpace.DATA].isOfferListLoaded;
export const getOffer = (state) => state[NameSpace.DATA].offer;
export const getOfferID = (state) => state[NameSpace.DATA].offer.id;
export const getOfferLoadingStatus = (state) => state[NameSpace.DATA].isOfferLoading;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getOffersNearby = (state) => state[NameSpace.DATA].offersNearby;

export const getFilteredOffers = createSelector(
    [getOffers, getLocationCity],
    getOffersByLocation
);

export const getFilteredSortedOffers = createSelector(
    [getFilteredOffers, getSortType],
    sortOffers
);

export const getOffersNearbyVisible = createSelector(
    getOffersNearby,
    (offers) => offers.slice(0, VISIBLE_OFFERS_NEARBY_COUNT)
);
