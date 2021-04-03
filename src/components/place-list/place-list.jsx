import React from "react";
import {useDispatch} from "react-redux";
import Place from "src/components/place/place";
import PropTypes from "prop-types";
import {propTypesPlace} from "src/utils/place";
import {PLACE_LIST_SETTINGS} from "src/utils/place";
import {setActiveOffer} from "src/store/action";

const PlaceList = ({offers, placeListType}) => {
  const dispatch = useDispatch();

  const handleSetActive = (id) => {
    dispatch(setActiveOffer(id));
  };

  const handleUnsetActive = () => {
    dispatch(setActiveOffer(null));
  };

  return (
    <div className={PLACE_LIST_SETTINGS[placeListType].className}>
      {offers.map((offer) => (
        <Place
          cardType={PLACE_LIST_SETTINGS[placeListType].cardType}
          offer={offer}
          key={offer.id}
          onMouseEnter={handleSetActive}
          onMouseLeave={handleUnsetActive}
        />
      ))}
    </div>
  );
};

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(propTypesPlace).isRequired,
  placeListType: PropTypes.string.isRequired,
};

export default PlaceList;
