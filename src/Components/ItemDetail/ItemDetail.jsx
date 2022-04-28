import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount";

function ItemDetail(product){


    return (
      <>
        <div className="detailContainer" >
          <img
            className="d-block detailImage"
            src={product.product.img}
            alt="Imagen de producto"
          />
          <div>
            <h3>{product.product.name}</h3>
            <p className="detailPrice"> $ {product.product.price}</p>
            <ItemCount product={product} />
          </div>
        </div>
      </>
    );
}

export default ItemDetail; 