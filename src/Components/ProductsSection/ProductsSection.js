import React from "react";
import "./ProductsSection.css"
import productsList from "../../productsList.js"
import ProductsItem from "../ProductsItem";

function ProductsSection(props){
    const produtsView = productsList.filter(item => item).map((item) => 
        <ProductsItem key={item.id} name={item.name} price={item.price} img={item.img} stock={item.stock}/>
    )
    return<> 
        <h2>{props.title} </h2>
        <div className="produtsViewContainer">
            {produtsView}
        </div>
    </>
    
}

export default ProductsSection; 