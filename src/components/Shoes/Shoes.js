import React from 'react';
import { add, multiply } from '../../utilities/calculation';//accepted

const Shoes = () => {
    // for total function
    const first = 2;
    const second = 140;
    const  totalPrice = add(first,second);
    // for mul function 
    const mul = multiply(first , second)
    return (
        <div style={{marginTop:'15px',border:'3px solid green',backgroundColor:'gray'}}>
           <h2>Welcome to my show shopping</h2> 
           <p>one pair of shoes price : {totalPrice}</p>
           <p>mul price : {mul}</p>
        </div>
    );
};

export default Shoes;