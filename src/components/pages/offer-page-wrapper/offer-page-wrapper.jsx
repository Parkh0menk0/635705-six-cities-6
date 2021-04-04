import React, {useEffect} from "react";
import OfferPage from "src/components/pages/offer-page/offer-page";
import {fetchComments, fetchOffer, fetchNearOffers} from "src/store/api-actions";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getCommentsVisible, getOffersNearbyVisible} from "src/store/data/selectors";

const OfferPageWrapper = () => {
  const {id} = useParams();

  const offer = useSelector((state) => state.DATA.offer);
  const isOfferLoading = useSelector((state) => state.DATA.isOfferLoading);
  const comments = useSelector(getCommentsVisible);
  const offersNearby = useSelector(getOffersNearbyVisible);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffer(id));
  }, [id]);

  useEffect(() => {
    dispatch(fetchComments(id));
  }, [id], comments);

  useEffect(() => {
    dispatch(fetchNearOffers(id));
  }, [id]);

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
