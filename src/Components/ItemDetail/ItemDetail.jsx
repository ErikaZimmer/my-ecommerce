import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount";
import { useState } from "react";

function ItemDetail(product){

  const [carrito, setCarrito] = useState(1);

    function onAdd(dato){
        setCarrito(dato);
    }
    console.log(carrito);

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
            <ItemCount stock={product.product.stock} initial={1} onAdd={onAdd}/>
          </div>
        </div>
      </>
    );
}

export default ItemDetail; 