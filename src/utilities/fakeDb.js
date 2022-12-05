// use local Storage price to manage price cart data
/*
const addToDb = (name) =>{ // v-47-5-5 and ager videor 
    /*
     *  localStorage set item and add with multi-click value of key
        localStorage set item and add with multi-click value of key
    *   from v-47-5-5 videos 
    *//* 
       const quantity = localStorage.getItem(name);
        if(quantity){
            const newQuantity = parseInt(quantity) + 1;
            localStorage.setItem(name,newQuantity);
        }
        else{
            localStorage.setItem(name,1);
        }
     */
        // const newClick = localStorage.getItem(name);
        // console.log(newClick)
        // const newClick = name +  1;
    //}
    //export { addToDb };



/*
const addToDb = (name) =>{ // v-47-5-6 to store multiple data in an with 
           //                                              localStorage   
        /*
        localStorage set item and add with multi-click key with multiple 
        key and multiple value as a object  
        from v-47-5-6 videos 
        /

        let shoppingCart ;
        // get the shopping cart
        const storedCart = localStorage.getItem('Shopping Cart H.Alam')
        if(storedCart){
            shoppingCart = JSON.parse(storedCart);
        }else{
            shoppingCart = {};
        }
    
        // add quantity
        const quantity = shoppingCart[name];
        if(quantity){ 
           const newQuantity =  parseInt(quantity) + 1;
           shoppingCart[name] = newQuantity;
        }
        else{
            shoppingCart[name] = 1;
        } 
        localStorage.setItem('Shopping Cart H.Alam',JSON.stringify(shoppingCart)) 
    
    }
    export { addToDb }; 
*/                           

const addToDb = (name) =>{ // v-47-5-7 to store multiple data in an with 
           //                                              localStorage   
    let shoppingCart ;
    // get the shopping cart
    const storedCart = localStorage.getItem('Shopping Cart H.Alam')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }else{
        shoppingCart = {};
    }
    // add quantity
    const quantity = shoppingCart[name];
    if(quantity){ 
       const newQuantity =  parseInt(quantity) + 1;
       shoppingCart[name] = newQuantity;
    }
    else{
        shoppingCart[name] = 1;
    } 
    localStorage.setItem('Shopping Cart H.Alam',JSON.stringify(shoppingCart)) 
}

// data remove from localStorage  v-47-5-7
const removeFromDb = name =>{
    const storedCart = localStorage.getItem('Shopping Cart H.Alam');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(name in shoppingCart){
            delete shoppingCart[name]
            localStorage.setItem('Shopping Cart H.Alam',JSON.stringify(shoppingCart));
        }
    }
}




// to delete whole key and value 
const deleteShoppingCart = () =>{
    localStorage.removeItem('Shopping Cart H.Alam')
    console.log()
}

export { addToDb , removeFromDb , deleteShoppingCart};                            