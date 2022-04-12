import React, { useEffect, useState } from 'react';
import CustomFetch from '../customFetch';
import productsList from "../productsList";
import ProductsSection from '../ProductsSection/ProductsSection';
import ProductsItem from "../ProductsItem";

function ProductsSectionContainer() {
    const [element, setElement] = useState([]);

    useEffect(() => {
        CustomFetch(3000, productsList)
        .then(resultado => setElement(resultado))
        .catch(error => console.log(error));
    }, [element])

    const produtsBestSellers = element.filter(item => item.topSeller === true).map((item) => 
        <ProductsItem key={item.id} name={item.name} price={item.price} img={item.img} stock={item.stock}/>
    )
    const produtsFavorite = element.filter(item => item.favorite === true).map((item) => 
        <ProductsItem key={item.id} name={item.name} price={item.price} img={item.img} stock={item.stock}/>
    )

  return (
      <>
        <ProductsSection title="Más Vendidos" products={produtsBestSellers}/>
        <ProductsSection title="Nuestros favoritos" products={produtsFavorite}/>  
      </>
    
  )
}


export default ProductsSectionContainer;