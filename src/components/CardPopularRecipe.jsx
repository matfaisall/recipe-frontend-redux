import React from "react";
import Col from "react-bootstrap/Col";

const CardPopularRecipe = (props) => {
  return (
    <>
      <Col key={props.index}>
        <div className="card overflow-hidden">
          <img src={props.image} className="card-img-top" alt="Popular menu" />
          <div className="card-img-overlay d-flex flex-column justify-content-end h-100 text-white">
            <h5 className="card-title">{props.title}</h5>
            <h5>{props.sub_title}</h5>
          </div>
        </div>
      </Col>
    </>
  );
};

export default CardPopularRecipe;
