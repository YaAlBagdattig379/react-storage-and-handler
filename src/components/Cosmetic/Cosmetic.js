import React from 'react';

const Cosmetic = (props) => {
    const {name,price} = props.cosmetic; // destructuring for reducing code from below to get into object key and value
    return (
        <div style={{border:"3px solid yellow"}}>
            <h3>name : {name}</h3>
            <p>age : {price}</p>
        </div>
    );
};

export default Cosmetic;