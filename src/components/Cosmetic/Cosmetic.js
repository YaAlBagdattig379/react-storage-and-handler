import React from 'react';
import './Cosmetic';
import { addToDb } from '../../utilities/fakeDb';
const Cosmetic = (props) => {
    const {name,price} = props.cosmetic; // destructuring for reducing code to reduce from below to get into object key and value
    const addToCart = (name) =>{
        addToDb(name); //localStorprice.setItem('products',price)                                   
    }
    const addToPriceWithPara = () => addToCart(name)// first system for eventHandler
    return (
        <div style={{border:'4px solid red'}} >
            <h3>Name : {name}</h3>
            
            <p>Price : {price}</p>
            <button onClick={addToPriceWithPara} style={{marginBottom:'10px'}}>add to addToCart</button> {/*first system for eventHandler*/}
            {/* <button onClick={() => addToCart(name)} style=
            {{marginBottom:'10px'}}>purchase</button> */}
            {/* second system for eventHandler direct */}
            <button onClick={() => addToCart(name)} style={{marginBottom:'10px'}}>purchase</button>
            {/* second system for eventHandler direct */}
        </div>
    );
};

export default Cosmetic;