import React from "react";
import "../../styles/card.css";

function MyCard() {
  return (
    <div class="card-container">
      <img
        class="card-img-top"
        src="https://placedog.net/800/640?id=59"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
        <div className="card-footer">
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
