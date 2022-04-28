import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"

export const ProductsContext = createContext();

function ProductsContexttProvider ( {children} ) {

    const [product, setProduct] = useState({});

    useEffect(() => {

        const db = getFirestore();
        const productsCollection = collection(db, "Products");
        getDocs(productsCollection).then((snapshot) => {
            if (snapshot.size === 0)
                {console.log("No tenemos resultados");}
            setProduct(snapshot.docs.maps((doc) => ({ id: doc.id, ...doc.data()})));
        });
    }, []);

    return ( 
        <>
            <ProductsContext.Provider value={{product}}>
                {children}
            </ProductsContext.Provider>
        </>
    )

}

export default ProductsContexttProvider;