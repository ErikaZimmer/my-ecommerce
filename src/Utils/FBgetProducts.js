import React, { useState ,  useEffect} from "react";
import {doc, getDoc, getFirestone} from "firebase"


function FBgetProducts(){

    const [product, setProduct] = useState({});

    useEffect(() => {

        const db = getFirestone();

        const productsList = doc(db, "Products", id )
        getDoc(productsList)
        .then(resultado => setProduct(resultado))
        .catch(error => console.log(error));
    }, [])

}

export default FBgetProducts;