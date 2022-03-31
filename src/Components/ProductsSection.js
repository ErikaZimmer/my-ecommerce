import React from "react";
import "./ProductsSection.css"
import productsList from "../productsList.js"
import ProductsItem from "./ProductsItem";

function ProductsSection(props){
    const produtsView = productsList.filter(item => item.topSeller === true).map((item) => 
        <ProductsItem id={item.id} name={item.name} price={item.price} img={item.img}/>
    )
    return<>
        <h2>{props.title} </h2>
        <div className="produtsViewContainer">
            {produtsView}
        </div>
    </>
    
}

export default ProductsSection; 