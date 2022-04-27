import React, {useContext} from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount";
import BuyButton from "../BuyButton";
import { CartContext } from "../../Utils/CartContext";

function ItemDetail(product){

  const { activeButton }  = useContext( CartContext );

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
            <ItemCount product={product} style={activeButton?{ display: 'none' }:{ display: 'inline' }}/>
            <BuyButton style={activeButton?{ display: 'inline' }:{ display: 'none' }}/>
          </div>
        </div>
      </>
    );
}

export default ItemDetail; 