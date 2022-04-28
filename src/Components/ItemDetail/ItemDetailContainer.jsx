import React, { useState ,  useEffect} from "react";
import { useParams } from "react-router-dom";
import SearchProduct from '../../Utils/searchProduct';
import ItemDetail from './ItemDetail' 
import productsList from "../../Utils/productsList";


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