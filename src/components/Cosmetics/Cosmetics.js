import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
const Cosmetics = () => {
  const [cosmetics,setCosmetics] = useState([]); // third system to generate
  useEffect( () =>{
    fetch('Data.json')// this file are created in public folder of react
    .then(res => res.json())
    .then(data => setCosmetics(data));
  },[])
    // const cosmetics = [// first system to generate data
    //     {name:'fair lovely Category-A',id:'1',price:'20',weight:'6grm'},
    //     {name:'fair lovely Category-B',id:'2',price:'10',weight:'4grm'},
    //     {name:'fair lovely Category-C',id:'3',price:'15',weight:'5grm'},
    //     {name:'fair lovely Category-D',id:'4',price:'25',weight:'7grm'},
    //     {name:'fair lovely Category-E',id:'5',price:'30',weight:'8grm'}
    // ]
    // second system to generate data
    // const cosmetics =[//second system to generate data
    //   {
    //     "picture": "http://placehold.it/32x32",
    //     "price": 31,
    //     "name": "Kelli Johns"
    //   },
    //   {
    //     "picture": "http://placehold.it/32x32",
    //     "price": 31,
    //     "name": "Deleon Horton",
    //   },
    //   {
    //     "picture": "http://placehold.it/32x32",
    //     "price": 32,
    //     "name": "Rasmussen Schroeder", 
    //   },
    //   {
    //     "picture": "http://placehold.it/32x32",
    //     "price": 25,
    //     "name": "Phelps Soto",
    //   }
    // ]
    return (
        <div style={{border:'4px solid green'}}>
            <h1>Welcome to my Cosmetics Store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic ={cosmetic}></Cosmetic>)
            }
        </div>
    );
}
export default Cosmetics;