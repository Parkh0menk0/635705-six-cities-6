import React from "react";
import LocationList from "src/components/location-list/location-list";
import PlaceSort from "src/components/places-sort/places-sort";
import PlaceList from "src/components/place-list/place-list";
import {CITIES, MapType, PlaceListType} from "src/const";
import Map from "src/components/map/map";
import PropTypes from "prop-types";
import {propTypesPlace} from "src/utils/place";

const Main = ({offers, locationCity, sortTypes, locations}) => {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationList locations={locations} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {locationCity}</b>
            <PlaceSort sortTypes={sortTypes} />
            <PlaceList offers={offers} placeListType={PlaceListType.CITIES} />
          </section>
          <div className="cities__right-section">
            <Map mapType={MapType.CITIES}/>
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(propTypesPlace).isRequired,
  locationCity: PropTypes.oneOf(CITIES).isRequired,
  locations: PropTypes.array.isRequired,
  sortTypes: PropTypes.array.isRequired
};

export default Main;
