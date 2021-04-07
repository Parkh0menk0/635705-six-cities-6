import PropTypes from "prop-types";
import {CardType, CITIES, MAX_RATING, PLACE_TYPES} from "../const";

export const PLACE_SETTINGS = {
  cities: {
    imgHeight: 200,
    imgWidth: 260,
    articleClassName: `cities__place-card place-card`,
    imgWrapperClassName: `cities__image-wrapper place-card__image-wrapper`,
    infoClass: `place-card__info`,
    premiumMark: true,
    setActiveHandlers: true
  },
  favorites: {
    imgHeight: 110,
    imgWidth: 150,
    articleClassName: `favorites__card place-card`,
    imgWrapperClassName: `favorites__image-wrapper place-card__image-wrapper`,
    infoClass: `favorites__card-info place-card__info`,
    premiumMark: true,
    setActiveHandlers: false
  },
  near: {
    imgHeight: 200,
    imgWidth: 260,
    articleClassName: `near-places__card place-card`,
    imgWrapperClassName: `near-places__image-wrapper place-card__image-wrapper`,
    infoClass: `place-card__info`,
    premiumMark: true,
    setActiveHandlers: true
  }
};

export const PLACE_LIST_SETTINGS = {
  near: {
    className: `near-places__list places__list`,
    cardType: CardType.NEAR
  },
  cities: {
    className: `cities__places-list places__list tabs__content`,
    cardType: CardType.CITIES
  }
};

export const MAP_SETTINGS = {
  near: {
    className: `property__map map`,
  },
  cities: {
    className: `cities__map map`
  }
};

export const adaptOfferToServer = (place) => {
  const adaptedPlace = Object.assign(
      {},
      place,
      {

      }
  );

  return adaptedPlace;
};

export const makeRatingScore = (rating) => {
  return (Math.round(rating) / MAX_RATING) * 100;
};

export const groupByLocation = (places) => {
  return places.reduce((r, a) => {
    r[a.city.name] = [...r[a.city.name] || [], a];
    return r;
  }, {});
};

export const getOffersByLocation = (offers, location) => {
  return offers.filter((offer) => offer.city.name === location);
};

export const propTypesPlace = PropTypes.shape({
  "bedrooms": PropTypes.number.isRequired,
  "city": PropTypes.shape({
    "location": PropTypes.shape({
      "latitude": PropTypes.number.isRequired,
      "longitude": PropTypes.number.isRequired,
      "zoom": PropTypes.number.isRequired,
    }),
    "name": PropTypes.oneOf(CITIES).isRequired,
  }).isRequired,
  "description": PropTypes.string.isRequired,
  "goods": PropTypes.array.isRequired,
  "host": PropTypes.shape({
    "avatar_url": PropTypes.string.isRequired,
    "id": PropTypes.number.isRequired,
    "is_pro": PropTypes.bool.isRequired,
    "name": PropTypes.string.isRequired,
  }),
  "id": PropTypes.number.isRequired,
  "images": PropTypes.array.isRequired,
  "is_favorite": PropTypes.bool.isRequired,
  "is_premium": PropTypes.bool.isRequired,
  "location": PropTypes.shape({
    "latitude": PropTypes.number.isRequired,
    "longitude": PropTypes.number.isRequired,
    "zoom": PropTypes.number.isRequired,
  }),
  "max_adults": PropTypes.number.isRequired,
  "preview_image": PropTypes.string.isRequired,
  "price": PropTypes.number.isRequired,
  "rating": PropTypes.number.isRequired,
  "title": PropTypes.string.isRequired,
  "type": PropTypes.oneOf(PLACE_TYPES).isRequired
});


