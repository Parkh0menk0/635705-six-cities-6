import React, {useState} from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import Header from "src/components/layout/header/header";
import {makeRatingScore, propTypesPlace} from "src/utils/place";
import {propTypesReview} from "src/utils/review";
import Reviews from "src/components/reviews/reviews";
import PropertyGallery from "src/components/offer-gallery/offer-gallery";
import PlaceList from "src/components/place-list/place-list";
import withSpinner from "src/hocs/with-spinner/with-spinner";
import {AppRoute, MapType, PlaceListType} from "src/const";
import {AuthorizationStatus} from "src/api";
import Map from "src/components/map/map";
import {setFavoriteStatus} from "src/store/api-actions";

const OfferPage = ({offer, comments, offersNearby}) => {
  const {id} = useParams();
  const authorizationStatus = useSelector((state) => state.USER.authorizationStatus);
  const dispatch = useDispatch();
  const history = useHistory();

  const [isFavorite, setIsFavorite] = useState(offer[`is_favorite`]);

  const handleBookmarkClick = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(AppRoute.LOGIN);
      return;
    }
    setIsFavorite(!isFavorite);

    dispatch(setFavoriteStatus(id, !isFavorite ? 1 : 0));

  };

  const {
    "is_premium": isPremium,
    price,
    type,
    rating,
    description,
    bedrooms,
    "max_adults": maxAdults,
    goods,
    images,
    title,
    host
  } = offer;

  const classFavorite = isFavorite ?
    `property__bookmark-button property__bookmark-button--active button` :
    `property__bookmark-button button`;

  const hostClassName = `property__avatar-wrapper ${host[`is_pro`] && `property__avatar-wrapper--pro`} user__avatar-wrapper`;
  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <PropertyGallery images={images} />
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>)
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  className={classFavorite}
                  type="button"
                  onClick={handleBookmarkClick}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: makeRatingScore(rating) + `%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, goodId) => (
                    <li key={goodId} className="property__inside-item">{good}</li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={hostClassName}>
                    <img className="property__avatar user__avatar" src={host[`avatar_url`]} width="74" height="74"
                      alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <Reviews reviews={comments} />
            </div>
          </div>
          <Map offers={offersNearby} mapType={MapType.NEAR}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceList offers={offersNearby} placeListType={PlaceListType.NEAR} />
          </section>
        </div>
      </main>
    </div>
  );
};

OfferPage.propTypes = {
  offer: propTypesPlace.isRequired,
  comments: PropTypes.arrayOf(propTypesReview).isRequired,
  offersNearby: PropTypes.arrayOf(propTypesPlace).isRequired,
};

export {OfferPage};
export default withSpinner(OfferPage);
