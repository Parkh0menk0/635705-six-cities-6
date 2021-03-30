import React from "react";
import PropTypes from "prop-types";
import {getMonth, getYear, getDate} from "src/common";
import {MAX_RATING} from "src/const";

const Review = ({review}) => {
  const {
    user: {avatar_url: avatarUrl, name},
    rating,
    comment,
    date,
  } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${(rating / MAX_RATING) * 100}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={getDate(date)}>
          {`${getMonth(date)} ${getYear(date)}`}
        </time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    "comment": PropTypes.string,
    "date": PropTypes.string,
    "id": PropTypes.number,
    "rating": PropTypes.number,
    "user": PropTypes.shape({
      "avatar_url": PropTypes.string,
      "id": PropTypes.number,
      "is_pro": PropTypes.bool,
      "name": PropTypes.string
    })
  }),
};

export default Review;
