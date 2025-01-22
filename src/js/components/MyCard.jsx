import React from "react";

function MyCard() {
  return (
    <div class="card containter">
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
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default MyCard;
