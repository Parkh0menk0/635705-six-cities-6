import React from "react";
import PropTypes from "prop-types";

const PropertyGallery = ({images}) => {
  return (
    <div className="property__gallery">
      {images.map((image, index) => {
        return (
          <div className="property__image-wrapper" key={index}>
            <img
              className="property__image"
              src={image}
              alt="Photo studio"
            />
          </div>
        );
      })}
    </div>
  );
};

PropertyGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default PropertyGallery;
