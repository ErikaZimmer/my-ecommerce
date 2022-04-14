import React from "react";

function ItemDetail(product){

  console.log("Aca ta el item: " + {product});
  console.log(product);
  console.log({product});
    return (
      <>
          <img
            className="d-block w-100"
            src={product.img}
            alt="Imagen de producto"
          />
          <h3>{product.name}</h3>
      </>
    );
}

export default ItemDetail; 