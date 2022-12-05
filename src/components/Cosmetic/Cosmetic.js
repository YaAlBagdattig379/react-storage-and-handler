import React from 'react';
import './Cosmetic';
import { addToDb , removeFromDb , deleteShoppingCart} from '../../utilities/fakeDb';
const Cosmetic = (props) => {
    const {name,price} = props.cosmetic; // destructuring for reducing code to reduce from below to get into object key and value
    const addToCart = (name) =>{
        addToDb(name); //localStorprice.setItem('products',price)                                   
    }
    const addToPriceWithPara = () => addToCart(name)// first system for eventHandler

    // data remove from localStorage
    const removeFromCart = name =>{
        removeFromDb(name)
        // console.log('removing cart',name);
    }

    return (
        <div style={{border:'4px solid red'}} >
            <h3>Name : {name}</h3>
            
            <p>Price : {price}</p>
            <button onClick={addToPriceWithPara} style={{marginBottom:'10px'}}>add to addToCart</button> {/*first system for eventHandler*/}
            {/* <button onClick={() => addToCart(name)} style=
            {{marginBottom:'10px'}}>purchase</button> */}
            {/* second system for eventHandler direct */}
            {/* <button onClick={() => addToCart(name)} style={{marginBottom:'10px'}}>purchase</button> */}
            {/* second system for eventHandler direct */}

            {/* remove button  */}
            <button onClick={() => removeFromCart(name)} style={{marginBottom:'10px'}}>remove</button>

            {/* to remove whole shoppingCarat button  */}
            <button onClick={() => deleteShoppingCart ()} style={{marginBottom:'10px'}}>deleteShoppingCart</button>
        </div>
    );
};

export default Cosmetic;