// use local Storage price to manage price cart data

const addToDb = (name) =>{
    /**
     * localStorage set item and add with multi-click value of key
     * localStorage set item and add with multi-click value of key
    * from v-47-5-5 videos 
    */
    const quantity = localStorage.getItem(name);
    if(quantity){
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(name,newQuantity);
    }
    else{
        localStorage.setItem(name,1);
    }
    // const newClick = localStorage.getItem(name);
    // console.log(newClick)
    // const newClick = name +  1;
}
export { addToDb };