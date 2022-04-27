import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import CustomFetch from '../../Utils/customFetch';
import productsList from "../../Utils/productsList";
import ItemList from './ItemList';
import Item from "../Item";
import BreadcrumbInfo from '../BreadcrumbInfo';


function ItemListContainer(props) {

    const {idCategory} = useParams();
    const [element, setElement] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        CustomFetch(500, productsList, idCategory)
        .then(resultado => setElement(resultado))
        .catch(error => console.log(error))
        .finally(()=> {setLoading(false)});
    }, [idCategory])

    console.log(idCategory);

    const products = element.map((item) => 
        <Item item={item} key={item.id}/>
    )

  return (
      <>
        { loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <>
            <BreadcrumbInfo/>
            <ItemList title={idCategory} products={products}/>
          </>
        )
        }
      </>
    
  )
}

export default ItemListContainer;