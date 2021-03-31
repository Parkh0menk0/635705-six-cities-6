import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import SortList from "src/components/sort-list/sort-list";


const PlaceSort = ({sortTypes}) => {
  const {sortType, locationCity} = useSelector((state) => state.APP);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sortMenuClickHandler = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [sortType, locationCity]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={sortMenuClickHandler} className="places__sorting-type" tabIndex="0">
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <SortList isOpen={isMenuOpen} sortTypes={sortTypes} />
    </form>
  );
};

PlaceSort.propTypes = {
  sortTypes: PropTypes.array.isRequired,
};


export default PlaceSort;
