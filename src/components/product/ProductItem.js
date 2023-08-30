import React from "react";
import { Link } from "react-router-dom";

function ProductItem(props){
    return(
<div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <Link to="/PetPage">
          <img src="" class="card-img-top" alt="Golden Retriever"/>
          <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">Gender: {props.gender}</p>
            <p class="card-text">Age : {props.age}</p>
            <p class="card-text">Seller Name : {props.sellerFname} {props.sellerLname}</p>
            <p class="card-text">Price : {props.price}</p>
            </div>
            </Link>
            <div>
            <button class="btn btn-primary btn-block">Add to Cart</button>
            </div>
        </div>
        
      </div>
    )
}export default ProductItem;