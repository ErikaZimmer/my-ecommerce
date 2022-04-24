import React, { useState ,  useEffect} from "react";
import { useParams } from "react-router-dom";
import productsList from "../productsList";
import SearchProduct from '../searchProduct';
import ItemDetail from './ItemDetail' 

function ItemDetailContainer(){

    const {idItem} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        SearchProduct(1000, productsList, idItem)
        .then(resultado => setProduct(resultado))
        .catch(error => console.log(error));
    }, [idItem])

    return(
        <ItemDetail product={product}/> 
    )

}



export default ItemDetailContainer;