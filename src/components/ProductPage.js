import React, { useEffect } from "react";
import ProductItem from "./product/ProductItem";
import {useParams} from "react-router-dom"

function ProductPage(){
  const {categoryName} = useParams();

  useEffect(()=>{

  },[categoryName])
    return(
        <div>
            <header class="bg-light text-center py-4">
    <h1 class="display-4">{categoryName}</h1>
    <p class="lead">Find your perfect furry friend!</p>  
  </header>

  <section class="container py-5">
    <div class="row">
      
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      
    </div>
  </section>
        </div>
    );
}export default ProductPage;