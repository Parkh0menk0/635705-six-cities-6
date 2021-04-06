import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";

import FavoritesPage from "../favorites-page/favorites-page";
import {fetchFavorite} from "../../../store/api-actions";


const FavoritesPageWrapper = () => {
  const favorites = useSelector((state) => state.DATA.favorites);
  const isFavoriteLoading = useSelector((state) => state.DATA.isFavoriteLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorite());
  }, []);

  return (
    <FavoritesPage
      offers={favorites}
      isLoading={isFavoriteLoading}
    />
  );
};


export default FavoritesPageWrapper;

