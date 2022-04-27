import React, { useEffect, useState } from 'react';
import Fetch from '../../Utils/fetch';
import CategoryItem from '../CategoryItem';
import CategoryList from "./CategoryList";
import categorysList from "../../Utils/categorysList";
import { Spinner } from 'react-bootstrap';

function CategoryListContainer(props) {

    const [categorys, setCategorys] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      Fetch(500, categorysList,)
      .then(resultado => setCategorys(resultado))
      .catch(error => console.log(error))
      .finally(()=> {setLoading(false)});
  }, [categorys])

    var category = categorys.map((item) => 
        <CategoryItem item={item} key={item.id}/>
    )

  return (
      <>
        { loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <CategoryList categorys={category}/>
        )
        }
      </>
    
  )
}

export default CategoryListContainer;