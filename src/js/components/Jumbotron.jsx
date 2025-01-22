import React from "react";
import "../../styles/jumbotron.css";
//create your first component
const Jumbotron = () => {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container m-3">
        <h1 class="display-3">
          <strong>Fluid Jumbotron</strong>
        </h1>
        <p class="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
        <p class="lead-2">
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
