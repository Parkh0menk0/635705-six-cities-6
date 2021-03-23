import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Link} from "react-router-dom";
import {Housing, ImageSize, AppRoute} from "src/const";
import {MAX_RATING} from "src/const";

const PlaceCard = ({pageType, offer, handleMouseEnter, handleMouseOut}) => {

  const {
    is_premium: isPremium,
    preview_image: previewImage,
    price,
    is_favorite: isFavorite,
    rating,
    title,
    type,
  } = offer;

  const shouldBeMarked = pageType === `main` && isPremium;
  const getOfferPath = (id) => AppRoute.ROOM.replace(/id/, id);

  return (
    <article
      className={classNames(`place-card`, {
        "favorites__card": pageType === `favorites`,
        "cities__place-card": pageType === `main`,
        "near-places__card": pageType === `offer`
      })}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
    >
      {shouldBeMarked && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={classNames(`place-card__image-wrapper`, {
        "favorites__image-wrapper": pageType === `favorites`,
        "cities__image-wrapper": pageType === `main`,
        "near-places__image-wrapper": pageType === `offer`
      })}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={pageType === `favorites` ? ImageSize.SMALL.width : ImageSize.LARGE.width}
            height={pageType === `favorites` ? ImageSize.SMALL.width : ImageSize.LARGE.height}
            alt={Housing[type]}
          />
        </a>
      </div>
      <div className={pageType === `favorites` ? `favorites__card-info place-card__info` : `place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorite && `place-card__bookmark-button--active`
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(rating / MAX_RATING) * 100}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={getOfferPath(offer.id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{Housing[type]}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
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
  pageType: PropTypes.string,
  handleMouseEnter: PropTypes.func,
  handleMouseOut: PropTypes.func,
};

export default PlaceCard;
