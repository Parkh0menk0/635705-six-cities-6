import React, {useMemo} from "react";
import PropTypes from "prop-types";
import {mapTypes} from "src/const";
import Map from "src/components/map/map";
import PlaceSort from "src/components/places/sort";
import PlacesList from "src/components/places/places";


export const sortOffers = (offers, sortOption) => {
  switch (sortOption.id) {
    case `price-from-low`:
      return offers.sort((a, b) => a.price - b.price);
    case `price-from-high`:
      return offers.sort((a, b) => b.price - a.price);
    case `price-top-rated`:
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

const CitiesList = ({
  selectedCity,
  offers,
  sortOption,
  onHoverOffer,
  activeOfferId,
  onSetSortOption,
}) => {
  const filteredOffers = useMemo(
      () => offers.filter((item) => item.city.name === selectedCity.name),
      [offers, selectedCity]
  );

  const sortedOffers = useMemo(
      () => sortOffers(filteredOffers, sortOption),
      [filteredOffers, sortOption]
  );

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`${filteredOffers.length} places to stay in ${selectedCity.name}`}</b>
          <PlaceSort
            onSetSortOption={onSetSortOption}
            sortOption={sortOption}
          />
          <PlacesList
            pageType="main"
            offers={sortedOffers}
            onHoverOffer={onHoverOffer}
            activeOfferId={activeOfferId}
          />
        </section>
        <div className="cities__right-section">
          <Map
            offers={filteredOffers}
            type={mapTypes.MAIN}
            location={selectedCity.location}
            activeOfferId={activeOfferId}
          />
        </div>
      </div>
    </div>
  );
};

CitiesList.propTypes = {
  selectedCity: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object),
  sortOption: PropTypes.object,
  onHoverOffer: PropTypes.func.isRequired,
  activeOfferId: PropTypes.number,
  onSetSortOption: PropTypes.func.isRequired,
};

export default React.memo(CitiesList);
