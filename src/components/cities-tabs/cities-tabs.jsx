import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {CITIES} from "src/const";

const CitiesTabs = ({selectedCity, onCityClick}) => {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city, key) => (
        <li key={key} className="locations__item">
          <a
            className={classNames(`locations__item-link`, `tabs__item`, {
              "tabs__item--active": city.name === selectedCity.name
            })}
            onClick={() => onCityClick(city)}
            href="#"
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

CitiesTabs.propTypes = {
  selectedCity: PropTypes.object.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default React.memo(CitiesTabs);
