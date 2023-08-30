import React from "react";
import { Link } from "react-router-dom";

function ProductItem(props){
  
  const userId = JSON.parse(localStorage.getItem('userData.userId'));
  function addToCart(){
    const petId = props.id;
    const url = `http://localhost:8080/cart/${userId}/item/add/${petId}`;
    console.log(petId);
    console.log(userId);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      
      body: JSON.stringify({
        
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); 
      })
      .catch(error => {
        console.error('Error adding item to cart:', error);
        
      });
  }
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
            <button type="button" class="btn btn-primary btn-block" onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
        
      </div>
    )
}export default ProductItem;