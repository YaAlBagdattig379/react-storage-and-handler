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




const addToDb = (name) =>{ // v-47-5-6 to store multiple data in an with 
           //                                              localStorage   
    /**
        localStorage set item and add with multi-click value of key
        localStorage set item and add with multi-click value of key
        from v-47-5-6 videos 
    */
    let shoppingCart ;
    // localStorage.setItem('Shopping Alam',shoppingCard)
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
        // localStorage.setItem(name,newQuantity);
    }
    else{
        shoppingCart[name] = 1;
        // localStorage.setItem(name,1);
    } 
    localStorage.setItem('Shopping Cart H.Alam',JSON.stringify(shoppingCart))
 

/* from v-5-5
    if(quantity){ 
       const newQuantity =  parseInt(quantity) + 1;
        localStorage.setItem(name,newQuantity);
    }
    else{
        localStorage.setItem(name,1);
    } 
 */ 
}
export { addToDb };                            