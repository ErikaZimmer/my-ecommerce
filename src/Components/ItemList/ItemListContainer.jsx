import React, { useEffect, useState } from 'react';
import CustomFetch from '../customFetch';
import productsList from "../productsList";
import ItemList from './ItemList';
import Item from "../Item";


function ItemListContainer() {
    const [element, setElement] = useState([]);

    useEffect(() => {
        CustomFetch(1000, productsList)
        .then(resultado => setElement(resultado))
        .catch(error => console.log(error));
    }, [element])

    const produtsBestSellers = element.filter(item => item.topSeller === true).map((item) => 
        <Item key={item.id} name={item.name} price={item.price} img={item.img} stock={item.stock} />
    )
    const produtsFavorite = element.filter(item => item.favorite === true).map((item) => 
        <Item key={item.id} name={item.name} price={item.price} img={item.img} stock={item.stock} />
    )

  return (
      <>
        <ItemList title="Más Vendidos" products={produtsBestSellers}/>
        <ItemList title="Nuestros favoritos" products={produtsFavorite}/>  
      </>
    
  )
}


export default ItemListContainer;