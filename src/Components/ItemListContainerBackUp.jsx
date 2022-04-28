import React, { useEffect, useState } from 'react';
import CustomFetch from '../customFetch';
import productsList from "../productsList";
import ItemList from './ItemList';
import Item from "../Item";


function ItemListContainer(props) {
    const [element, setElement] = useState([]);

    useEffect(() => {
        CustomFetch(1000, productsList)
        .then(resultado => setElement(resultado))
        .catch(error => console.log(error));
    }, [element])

    const products = element.map((item) => 
        <Item key={item.id} name={item.name} price={item.price} img={item.img} stock={item.stock} />
    )

  return (
      <>
        <ItemList title={props.title} products={products}/>
      </>
    
  )
}

export default ItemListContainer;