import React, { useState ,  useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import productsList from "../../Utils/productsList";
import SearchProduct from '../../Utils/searchProduct';
import ItemDetail from './ItemDetail' 
import { CartContext } from "../../Utils/CartContext";

function ItemDetailContainer(){

    const {idItem} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        SearchProduct(1000, productsList, idItem)
        .then(resultado => setProduct(resultado))
        .catch(error => console.log(error));
    }, [idItem])

    const [active, setActive] = useState(false);

    const { addToCart } = useContext(CartContext);

    function buying(id, cant){
        setActive(true);
        addToCart(id, cant);
    }

    return(
        <ItemDetail product={product} buying={buying} active={active}/> 
    )

}



export default ItemDetailContainer;