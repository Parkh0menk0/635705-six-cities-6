import React from "react";
import PropTypes from "prop-types";
import {propTypesPlace} from "src/utils/place";
import withSpinner from "src/hocs/with-spinner/with-spinner";
import Favorites from "src/components/favorites/favorites";
import FavoritesEmpty from "src/components/favorites-empty/favorites-empty";

const FavoritesPage = ({offers}) => {

  return (
    (offers.length > 0) ?
      <Favorites offers={offers} /> :
      <FavoritesEmpty />
  );
};

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(propTypesPlace).isRequired
};

export default withSpinner(FavoritesPage);
