import React from "react";
import {Link} from "react-router-dom"

function ShopByCategory(){
    return(
<div class="container shopcategory">
          <h2>Shop by Category</h2>
          <div class="row text-center p-4">
            <div class="col-2">
              <Link to="/Shop">
                <img src="../Images/Birds/goldenpheasant1.jpg" class="rounded-circle" alt=""/><label for="Birds">Birds</label>
              </Link>
            </div>
            <div class="col-2">
              <Link to="/Shop">
                <img src="../Images/Rabbits/whiterabbit1.jpg" class="rounded-circle" alt=""/><label for="Rabbits">Rabbits</label>
              </Link>
            </div>
            <div class="col-2">
              <Link to="/Shop">
                <img src="../Images/Fish&Turtles/indianturtle.jpg" class="rounded-circle" alt=""/><label for="Turtles">Turtles</label>
              </Link>
            </div>
            <div class="col-2">
              <Link to="/Shop">
                <img src="../Images/Fish&Turtles/goldfish.jpg" class="rounded-circle" alt=""/><label for="Fish">Fish</label>
              </Link>
            </div>
            <div class="col-2">
              <Link to="/Shop">
                <img src="../Images/dogs/dog11.jpg" class="rounded-circle" alt=""/><label for="Dogs">Dogs</label>
              </Link>
            </div>
            <div class="col-2">
              <Link to="/Shop">
                <img src="../Images/cats/persiancat1.jpg" class="rounded-circle" alt=""/><label for="Cats">Cats</label>
              </Link>
            </div>
          </div>
        </div>
    )
}export default ShopByCategory;