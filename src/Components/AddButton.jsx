import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AddButton(props){

    return(
        <>
            <Link to="/cart" >
                <Button 
                    variant="primary" >
                        Comprar
                </Button>
            </Link>
        </>
    )
}

export default AddButton; 