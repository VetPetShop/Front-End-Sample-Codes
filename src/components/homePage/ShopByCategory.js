import React from "react";
import { Link } from "react-router-dom";

function ShopByCategory() {
  return (
    <div className="container shopcategory">
      <h2>Shop by Category</h2>
      <div className="row text-center p-4">
        {/* <div className="col-2">
          <Link to="/BirdsPAge">
            <img
              src="../Images/Birds/goldenpheasant1.jpg"
              className="rounded-circle"
              alt=""
            />
            <label htmlFor="Birds">Birds</label>
          </Link>
        </div> */}
        <div className="col-2">
          <Link to="/pet/Rabbits">
            <img
              src="../Images/Rabbits/whiterabbit1.jpg"
              className="rounded-circle"
              alt=""
            />
            <label htmlFor="Rabbits">Rabbits</label>
          </Link>
        </div>
        {/* <div className="col-2">
          <Link to="/TurtlesPage">
            <img
              src="../Images/Fish&Turtles/indianturtle.jpg"
              className="rounded-circle"
              alt=""
            />
            <label htmlFor="Turtles">Turtles</label>
          </Link>
        </div> */}
        {/* <div className="col-2">
          <Link to="/FishPage">
            <img
              src="../Images/Fish&Turtles/goldfish.jpg"
              className="rounded-circle"
              alt=""
            />
            <label htmlFor="Fish">Fish</label>
          </Link>
        </div> */}
        <div className="col-2">
          <Link to="/pet/Dogs">
            <img
              src="../Images/dogs/dog11.jpg"
              className="rounded-circle"
              alt=""
            />
            <label htmlFor="Dogs">Dogs</label>
          </Link>
        </div>
        <div className="col-2">
          <Link to="/pet/Cats">
            <img
              src="../Images/cats/persiancat1.jpg"
              className="rounded-circle"
              alt=""
            />
            <label htmlFor="Cats">Cats</label>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShopByCategory;
