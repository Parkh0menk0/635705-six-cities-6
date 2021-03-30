import React from "react";
import Review from "src/components/review/review";
import PropTypes from "prop-types";

const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Review review={review} key={review.id} />)}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export default ReviewsList;
