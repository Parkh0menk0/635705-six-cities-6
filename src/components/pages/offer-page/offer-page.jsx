import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {useRouteMatch} from "react-router-dom";
import {connect} from "react-redux";
import classNames from "classnames";
import Header from "src/components/layout/header/header";
import {AuthorizationStatus} from "src/api";
import ReviewsList from "src/components/reviews/reviews";
import ReviewsForm from "src/components/reviews-form/reviews-form";
import OfferPropertyGallery from "src/components/offer-gallery/offer-gallery";
import PlacesList from "src/components/places/places";
import {Housing} from "src/const";
import {MAX_RATING} from "src/const";
// import Map from "src/components/map/map";
import {
  fetchOffer,
  fetchNearOffers,
  fetchReviews,
  submitComment,
  toggleFavorite,
} from "src/store/api-actions";
import LoadingScreen from "src/components/loading-screen/loading-screen";
import {ActionCreator} from "src/store/action";

const OfferPage = ({
  reviews,
  openedOffer,
  submitCommentOnServer,
  status,
  loadOffer,
  nearOffers,
  loadNearOffersSuccess,
  loadReviews,
  toggleFavoriteOnClick,
  toggleOpenedCardFavorite,
}) => {
  const match = useRouteMatch();
  const pathId = parseInt(match.params.id.slice(1), 10);

  useEffect(() => {
    if (openedOffer.id !== pathId) {
      loadNearOffersSuccess(pathId);
      loadReviews(pathId);
      loadOffer(pathId);

      // return <LoadingScreen />;
    }
  }, [openedOffer.id]);

  const {
    id,
    is_premium: isPremium,
    images,
    title,
    rating,
    type,
    bedrooms,
    max_adults: maxAdults,
    price,
    goods,
    host: {name, avatar_url: avatarUrl, is_pro: isPro},
    description,
    // city,
    is_favorite: isFavorite,
  } = openedOffer;

  const cardFavorClickHandler = (cardId, cardStatus) => {
    const newStatus = cardStatus ? 0 : 1;
    toggleFavoriteOnClick(cardId, newStatus);
    toggleOpenedCardFavorite();
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <OfferPropertyGallery images={images} />
          </div>

          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={classNames(`property__bookmark-button button`, {
                    "property__bookmark-button--active": isFavorite,
                  })}
                  type="button"
                  onClick={() =>
                    cardFavorClickHandler(
                        id,
                        isFavorite ? `property__bookmark-button--active` : ``
                    )
                  }
                >
                  <svg
                    className="property__bookmark-icon"
                    width={31}
                    height={33}
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">
                    {isFavorite ? `In bookmarks` : `To bookmarks`}
                  </span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${(rating / MAX_RATING) * 100}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {Housing[type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((service, index) => (
                    <li className="property__inside-item" key={index}>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={classNames(
                        `property__avatar-wrapper`,
                        `user__avatar-wrapper`,
                        {
                          "property__avatar-wrapper--pro": isPro,
                        }
                    )}
                  >
                    <img
                      className="property__avatar user__avatar"
                      src={avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{name}</span>
                </div>
                <div className="property__description">
                  {description.map((text, index) => (
                    <p className="property__text" key={index}>
                      {text}
                    </p>
                  ))}
                </div>
              </div>

              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews ·{` `}
                  <span className="reviews__amount">{reviews.data.length}</span>
                </h2>
                {reviews.data ? (
                  <ReviewsList reviews={reviews.data} />
                ) : (
                  <LoadingScreen />
                )}

                {status === AuthorizationStatus.AUTH && (
                  <ReviewsForm
                    openedOffer={openedOffer}
                    submitCommentOnServer={submitCommentOnServer}
                  />
                )}
              </section>
            </div>
          </div>
          <section className="property__map map">
            {/* {nearOffers.data ? (
              <Map offers={nearOffers.data} city={city} />
            ) : (
              <LoadingScreen />
            )} */}
          </section>
        </section>
        {nearOffers.data ? (
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <PlacesList pageType="offer" offers={nearOffers.data} />
            </section>
          </div>
        ) : (
          <LoadingScreen />
        )}
      </main>
    </div>
  );
};

OfferPage.propTypes = {
  status: PropTypes.string.isRequired,
  reviews: PropTypes.object,
  openedOffer: PropTypes.shape({
    "bedrooms": PropTypes.number,
    "city": PropTypes.shape({
      "location": PropTypes.objectOf(PropTypes.number),
      "name": PropTypes.string
    }),
    "description": PropTypes.string,
    "goods": PropTypes.arrayOf(PropTypes.string),
    "host": PropTypes.shape({
      "avatar_url": PropTypes.string,
      "id": PropTypes.number.isRequired,
      "is_pro": PropTypes.bool,
      "name": PropTypes.string
    }),
    "id": PropTypes.number.isRequired,
    "images": PropTypes.arrayOf(PropTypes.string),
    "is_favorite": PropTypes.bool,
    "is_premium": PropTypes.bool,
    "location": PropTypes.objectOf(PropTypes.number),
    "max_adults": PropTypes.number,
    "preview_image": PropTypes.string,
    "price": PropTypes.number,
    "rating": PropTypes.number,
    "title": PropTypes.string,
    "type": PropTypes.string
  }),
  submitCommentOnServer: PropTypes.func.isRequired,
  nearOffers: PropTypes.object.isRequired,
  loadOffer: PropTypes.func.isRequired,
  loadNearOffersSuccess: PropTypes.func.isRequired,
  loadReviews: PropTypes.func.isRequired,
  toggleFavoriteOnClick: PropTypes.func.isRequired,
  toggleOpenedCardFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  status: state.user.status,
  openedOffer: state.openedOffer,
  nearOffers: state.nearOffers,
  reviews: state.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  submitCommentOnServer(id, review) {
    dispatch(submitComment(id, review));
  },
  loadOffer(id) {
    dispatch(fetchOffer(id));
  },
  loadNearOffersSuccess(id) {
    dispatch(fetchNearOffers(id));
  },
  loadReviews(id) {
    dispatch(fetchReviews(id));
  },
  toggleFavoriteOnClick(id, status) {
    dispatch(toggleFavorite(id, status));
  },
  toggleOpenedCardFavorite() {
    dispatch(ActionCreator.toggleOpenedCardFavorite());
  },
});

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
