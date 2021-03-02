import React from "react";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import Header from "src/components/layout/header/header";
import ReviewsList from "src/components/reviews/reviews";
import ReviewsForm from "src/components/reviews/form";
import OfferPropertyGallery from "src/components/offer/offer-gallery";
import PlacesList from "src/components/places/places";
import {Housing} from "src/const";
import {getRating} from "src/common";

const OfferPage = ({offers, reviews}) => {
  const {id} = useParams();
  const offer = offers.find((item) => `:${item.id}` === id);
  const firstOffers = offers.slice(0, 3); // @TODO: find offer by city and extract contants

  const {
    is_premium: isPremium,
    images,
    title,
    rating,
    type,
    bedrooms,
    max_adults: maxAdults,
    price,
    goods,
    host: {name, avatar_url: avatarUrl},
    description,
  } = offer;

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
                  className="property__bookmark-button button"
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width={31}
                    height={33}
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRating(rating)}%`}} />
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
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
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
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews} />
                <ReviewsForm />
              </section>
            </div>
          </div>

          <section className="property__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <PlacesList pageType="offer" offers={firstOffers} />
          </section>
        </div>
      </main>
    </div>
  );
};

OfferPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  reviews: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  reviews: state.reviews,
});


export default connect(mapStateToProps)(OfferPage);
