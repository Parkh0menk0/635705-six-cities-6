import React, {useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {SORT_LIST} from "src/const";

const PlaceSort = ({sortOption, onSetSortOption}) => {
  const [isDropDownOpen, setisDropDownOpen] = useState(false);

  const handleClick = (evt, selectedSortOption) => {
    evt.preventDefault();
    if (selectedSortOption.id !== sortOption.id) {
      onSetSortOption(selectedSortOption);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        onMouseEnter={() => setisDropDownOpen(!isDropDownOpen)}
        className="places__sorting-type"
        tabIndex={0}
      >
        {sortOption.title}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        onMouseLeave={() => setisDropDownOpen(!isDropDownOpen)}
        className={classNames(`places__options places__options--custom`, {
          "places__options--opened": isDropDownOpen,
        })}
      >
        {SORT_LIST.map((predefinedSortOption) => (
          <li
            onClick={(evt) => handleClick(evt, predefinedSortOption)}
            className={classNames(`places__option`, {
              "places__option--active": predefinedSortOption.id === sortOption.id,
            })}
            key={predefinedSortOption.id}
            tabIndex={0}
          >
            {predefinedSortOption.title}
          </li>
        ))}
      </ul>
    </form>
  );
};

PlaceSort.propTypes = {
  sortOption: PropTypes.object.isRequired,
  onSetSortOption: PropTypes.func.isRequired,
};

export default PlaceSort;
