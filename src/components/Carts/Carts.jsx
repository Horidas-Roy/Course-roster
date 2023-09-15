/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Carts = ({handleSelect}) => {
    
    const [carts,setCarts]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCarts(data))
    },[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {
                carts.map(cart=><Cart 
                    key={cart.id}
                     cart={cart}
                     handleSelect={handleSelect}
                     ></Cart>)
            }
        </div>
    );
};

export default Carts;