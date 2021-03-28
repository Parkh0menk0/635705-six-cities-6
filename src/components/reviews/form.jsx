import React, {useState} from "react";
import PropTypes from "prop-types";
import Star from "src/components/star/star";
import {MAX_RATING} from "src/const";

const ReviewsForm = ({openedOffer, submitCommentOnServer}) => {
  const [userForm, setUserForm] = useState({
    stars: null,
    review: ``,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitCommentOnServer(openedOffer.id, {review: userForm.review, rating: userForm.stars});
  };

  const handleRadioChange = (evt) => {
    const stars = evt.target.value;
    setUserForm((state) => ({...state, stars}));
  };

  const handleTextareaChange = (evt) => {
    evt.preventDefault();
    const {value} = evt.target;
    setUserForm({...userForm, review: value});
  };

  return (
    <React.Fragment>
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={(evt) => handleSubmit(evt)}
      >
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>
        <div className="reviews__rating-form form__rating">
          {Array.from(new Array(MAX_RATING)).map((field, index) => (
            <Star
              key={index}
              serialNumber={MAX_RATING - index}
              handleRadioChange={handleRadioChange}
            />
          ))}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={userForm.review}
          onChange={handleTextareaChange}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set{` `}
            <span className="reviews__star">rating</span> and describe your stay
            with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled
          >
            Submit
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

ReviewsForm.propTypes = {
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
};

export default ReviewsForm;
