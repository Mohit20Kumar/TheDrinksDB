import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, image, name, info, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <Link to={`/drink/${id}`}>
          <img src={image} alt={name} />
        </Link>
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/drink/${id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
