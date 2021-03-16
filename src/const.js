export const MAX_RATING = 5;

export const SORT_LIST = [
  {
    id: `default`,
    title: `Popular`,
  },
  {
    id: `price-from-low`,
    title: `Price: low to high`,
  },
  {
    id: `price-from-high`,
    title: `Price: high to low`,
  },
  {
    id: `price-top-rated`,
    title: `Top rated first`,
  },
];

export const ImageSize = {
  LARGE: {
    width: 260,
    height: 200,
  },
  SMALL: {
    width: 150,
    height: 110,
  },
};

export const Housing = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`,
};

export const CITIES = [
  {
    "location": {
      "latitude": 48.86268,
      "longitude": 2.33779,
      "zoom": 10,
    },
    "name": `Paris`,
  },
  {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10,
    },
    "name": `Cologne`,
  },
  {
    "location": {
      "latitude": 50.84889,
      "longitude": 4.35136,
      "zoom": 10,
    },
    "name": `Brussels`,
  },
  {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10,
    },
    "name": `Amsterdam`,
  },
  {
    "location": {
      "latitude": 53.55849,
      "longitude": 9.787741,
      "zoom": 10,
    },
    "name": `Hamburg`,
  },
  {
    "location": {
      "latitude": 51.238371,
      "longitude": 6.674269,
      "zoom": 10,
    },
    "name": `Dusseldorf`,
  }
];

export const mapTypes = {
  MAIN: `MAIN`,
  PROPERTY: `PROPERTY`,
};

export const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer/:id`,
};

export const APIRoutes = {
  OFFERS: `/hotels`,
  OFFER: `/hotels/:id`,
  OFFERS_NEARBY: `/hotels/:hotel_id/nearby`,
  FAVORITES: `/favorite`,
  REVIEWS: `/comments/:hotel_id`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
};
