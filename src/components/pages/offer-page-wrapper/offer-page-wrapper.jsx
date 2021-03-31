import React, {useEffect} from "react";
import OfferPage from "src/components/pages/offer-page/offer-page";
import {fetchComments, fetchOffer, fetchNearOffers} from "src/store/api-actions";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getOffersNearbyVisible} from "src/store/data/selectors";

const OfferPageWrapper = () => {
  const {id} = useParams();

  const offer = useSelector((state) => state.DATA.offer);
  const isOfferLoading = useSelector((state) => state.DATA.isOfferLoading);
  const comments = useSelector((state) => state.DATA.comments);
  const offersNearby = useSelector(getOffersNearbyVisible);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchComments(id));
    dispatch(fetchNearOffers(id));
  }, []);


  return (
    <OfferPage
      offer={offer}
      comments={comments}
      offersNearby={offersNearby}
      isLoading={isOfferLoading}
    />
  );
};


export default OfferPageWrapper;
