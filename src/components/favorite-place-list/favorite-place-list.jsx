import React from "react";
import PropTypes from "prop-types";
import {groupByLocation, propTypesPlace} from "src/utils/place";
import Place from "src/components/place/place";
import {CardType} from "src/const";
import {useSelector} from "react-redux";


const FavoritePlaceList = ({offers}) => {
  const locationCity = useSelector((state) => state.APP.locationCity);
  const offerGroups = groupByLocation(offers);
  const locations = Object.keys(offerGroups);

  const getCurrentLocationClass = (location) => {
    return (location === locationCity) ?
      `favorites__locations locations locations--current` :
      `favorites__locations locations`;
  };

  return (
    <ul className="favorites__list">
      {locations.map((location, id) =>
        <li key={id} className="favorites__locations-items">
          <div className={getCurrentLocationClass(location)}>
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{location}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offerGroups[location].map((offer) =>
              <Place
                key={offer.id}
                cardType={CardType.FAVORITES}
                offer={offer}
              />
            )}
          </div>
        </li>
      )}
    </ul>
  );
};

FavoritePlaceList.propTypes = PropTypes.arrayOf(propTypesPlace).isRequired;

export default FavoritePlaceList;
