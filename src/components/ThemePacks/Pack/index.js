import React from "react";
import PropTypes from "prop-types";
import "./pack.scss";

const Pack = ({ item }) => {
  return (
    <a href={item.url} className="pack-item">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <span>
        Includes: {item.images} images{" "}
        {item.vectors > 0 && `, ${item.vectors} vectors`}
      </span>
    </a>
  );
};
Pack.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    images: PropTypes.number,
    vectors: PropTypes.number,
  }).isRequired,
};

export default Pack;
