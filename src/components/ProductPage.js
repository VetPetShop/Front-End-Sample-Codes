import React, { useEffect, useState } from "react";
import ProductItem from "./product/ProductItem";
import {useParams} from "react-router-dom"

function ProductPage(){
  const {categoryName} = useParams();
  const [products,setProducts]=useState([]);
  useEffect(()=>{

    fetch(`http://localhost:8080/pets/category/${categoryName}`)
      .then(response => response.json())
      .then(data => {
       
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  },[categoryName])
    return(
        <div>
            <header class="bg-light text-center py-4">
    <h1 class="display-4">{categoryName}</h1>
    <p class="lead">Find your perfect furry friend!</p>  
  </header>

  <section class="container py-5">
    <div class="row">
      
    {products.map(product => (
          <ProductItem
          key={product.petId}
          name={product.breedName}
          gender={product.gender}
          age={product.petAge}
          sellerFname={product.sellerFirstName}
          sellerLname={product.sellerLastName}
          price={product.price}
          />
        ))}
      
    </div>
  </section>
        </div>
    );
}export default ProductPage;