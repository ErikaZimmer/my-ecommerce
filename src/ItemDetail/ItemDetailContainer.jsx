import React, { useState ,  useEffect} from "react";
import productsList from "../productsList";
import SearchProduct from '../SearchProduct';
import ItemDetail from './ItemDetail' 

function ItemDetailContainer(props){
    const [product, setProduct] = useState();


    useEffect(() => {
        SearchProduct(1000, productsList, props.idItem)
        .then(resultado => setProduct(resultado))
        .catch(error => console.log(error));
    }, [props.idItem])
    console.log(product);

    return(
        <ItemDetail product={product}/> 
    )

}



export default ItemDetailContainer;