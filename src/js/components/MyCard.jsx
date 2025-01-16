import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyCard() {
  return (
    <div class="card m-5">
      <img class="card-img-top" src="..." alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default MyCard;
