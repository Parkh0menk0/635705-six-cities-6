import React, {useEffect} from "react";
import MainPage from "src/components/pages/main-page/main-page";
import {CITIES, SORT_TYPES} from "src/const";
import {useDispatch, useSelector} from "react-redux";
import {fetchOffersList} from "src/store/api-actions";

const MainPageWrapper = () => {
  const isOfferListLoading = useSelector((state) => state.DATA.isOfferListLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffersList());
  }, []);

  return (
    <MainPage
      isLoading={isOfferListLoading}
      locations={CITIES}
      sortTypes={SORT_TYPES}
    />
  );
};

export default MainPageWrapper;
