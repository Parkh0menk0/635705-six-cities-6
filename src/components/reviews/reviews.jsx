import React from "react";
import PropTypes from "prop-types";
import {propTypesReview} from "src/utils/review";
import ReviewsForm from "src/components/reviews-form/reviews-form";
import Review from "src/components/review/review";

const Reviews = ({reviews}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, reviewId) => (
          <Review key={reviewId} review={review}/>
        ))}
      </ul>
      <ReviewsForm />
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(propTypesReview).isRequired
};
export default Reviews;
