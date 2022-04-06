import React, { useEffect, useState } from 'react';
import CustomFetch from '../customFetch';
import productsList from "../productsList.js";
import ProductsSection from '../ProductsSection/ProductsSection';
import ProductsItem from "../ProductsItem";


const produtsBestSellers = productsList.filter(item => item.topSeller === true).map((item) => 
<ProductsItem key={item.id} name={item.name} price={item.price} img={item.img} stock={item.stock}/>
)
const produtsFavorite = productsList.filter(item => item.favorite === true).map((item) => 
<ProductsItem key={item.id} name={item.name} price={item.price} img={item.img} stock={item.stock}/>
)

function ProductsSectionContainer() {
    const [item, setItems] = useState([]);

    useEffect(() => {
        CustomFetch(3000, item)
        .then(resultado => setItems(resultado))
        .catch(error => console.log(error));
    }, [item])
  return (
      <>
        <ProductsSection title="Más Vendidos" products={produtsBestSellers}/>
        <ProductsSection title="Nuestros favoritos" products={produtsFavorite}/>  
      </>
    
  )
}


export default ProductsSectionContainer;