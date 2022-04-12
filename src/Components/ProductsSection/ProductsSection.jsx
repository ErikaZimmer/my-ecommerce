import React from "react";
import "./ProductsSection.css"


function ProductsSection(props){

    return<> 
        <h2>{props.title} </h2>
        <div className="produtsViewContainer">
            {props.products}
        </div>
    </>
    
}

export default ProductsSection; 