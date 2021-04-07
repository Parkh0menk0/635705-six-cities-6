import React, {useEffect} from "react";
import OfferPage from "../offer-page/offer-page";
import {fetchComments, fetchOffer, fetchNearOffers} from "../../../store/api-actions";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getCommentsVisible, getOffersNearbyVisible} from "../../../store/data/selectors";

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
  }, [id]);

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
