import React, { useEffect, useState } from "react";
import ProductItem from "./product/ProductItem";
import {useParams} from "react-router-dom"
//import { response } from "express";

function ProductPage(){
  const {category} = useParams();
  const [products,setProducts]=useState([]);
  useEffect(()=>{

    fetch(`http://localhost:8080/api/pets/${category}`)
      .then(response => response.json())
      .then(data => {
       
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  },[category])
    return(
        <div>
            <header class="bg-light text-center py-4">
    <h1 class="display-4">{category}</h1>
    <p class="lead">Find your perfect furry friend!</p>  
  </header>

  <section class="container py-5">
    <div class="row">
      
    {products.map(product => (
          <ProductItem
          key={product.id}
          image={product.petImage}
          name={product.petName}
          gender={product.gender}
          breed={product.breed}
          price={product.price}
          />
        ))}
      
    </div>
  </section>
        </div>
    );
}export default ProductPage;