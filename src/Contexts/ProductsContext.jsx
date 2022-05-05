import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"

export const ProductsContext = createContext();

function ProductsContexttProvider ( {children} ) {

    const [product, setProduct] = useState([]);

    useEffect(() => {

        const db = getFirestore();
        const itemsCollection = collection(db, "Products");
        getDocs(itemsCollection).then((snapshot) => {
            setProduct(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
    }, []);

    /*function addStock(idProd, cant){
        let indexArr = isInList(productos, idProd); 
        products[indexArr].stock += cant; 
    }*/


    return ( 
        <>
            <ProductsContext.Provider value={{product}}>
                {children}
            </ProductsContext.Provider>
        </>
    )

}

export default ProductsContexttProvider;