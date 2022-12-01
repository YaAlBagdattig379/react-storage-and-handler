import React from 'react';
import { add, multiply } from '../../utilities/calculation';

const Cosmetics = () => {
    //cosmetics products price 
    const first = 33;
    const second = 553;
    const total = add(first,second)
    //cosmetics products price 
    const totalTotal = multiply(first,second);
    return (
        <div style={{border:'4px solid green'}}>
            <h1>Welcome to my Cosmetics Store</h1>
            <p>total Cosmetics products price : {total}</p>
            <h2>Welcome to my Cosmetics Store</h2>
            <p>total mulpliply  price : {totalTotal}</p>
        </div>
    );
};

export default Cosmetics;