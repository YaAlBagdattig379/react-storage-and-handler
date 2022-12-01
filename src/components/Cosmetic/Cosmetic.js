import React from 'react';
import './Cosmetic'

const Cosmetic = (props) => {
    const {name,age} = props.cosmetic; // destructuring for reducing code to reduce from below to get into object key and value
    const addToCart = (age) =>{
        console.log('add to cart',age)                          
    }
    const addToAgeWithPara = () => addToCart(age)// first system for eventHandler
    return (
        <div className='product'style={{border:'4px solid red'}} >
            <h3>name : {name}</h3>
            <p>price : {age}</p>
            <button onClick={addToAgeWithPara} style={{marginBottom:'10px'}}>add to age</button> {/*first system for eventHandler*/}
            <button onClick={() => addToCart(age)} style={{marginBottom:'10px'}}>subs to age</button>{/*second system for eventHandler direct*/}
        </div>
    );
};

export default Cosmetic;