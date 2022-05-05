import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail' ;
import { ProductsContext } from '../../Contexts/ProductsContext';


function ItemDetailContainer(){

   const { idItem } = useParams();
   const { product } = useContext(ProductsContext);

  
    const productItem = product.find(item => item.id === idItem.toString());


    return(
        <ItemDetail product={productItem}/> 
    )

}


export default ItemDetailContainer;