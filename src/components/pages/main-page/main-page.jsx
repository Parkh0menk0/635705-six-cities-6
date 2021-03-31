import React from "react";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import Header from "src/components/layout/header/header";
import {getFilteredSortedOffers} from "src/store/data/selectors";
import Main from "src/components/main/main";
import MainEmpty from "src/components/main-empty/main-empty";
import withSpinner from "src/hocs/with-spinner/with-spinner";


const MainPage = ({locations, sortTypes}) => {
  const locationCity = useSelector((state) => state.APP.locationCity);
  const offers = useSelector(getFilteredSortedOffers);

  return (
    <div className="page page--gray page--main">

      <Header />
      {(offers.length > 0) ?
        <Main offers={offers} locationCity={locationCity} sortTypes={sortTypes} locations={locations} /> :
        <MainEmpty locations={locations} locationCity={locationCity} />
      }
    </div>
  );
};

MainPage.propTypes = {
  locations: PropTypes.array.isRequired,
  sortTypes: PropTypes.array.isRequired
};

export default withSpinner(MainPage);
