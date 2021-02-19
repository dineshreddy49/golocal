import {ADD_TO_CART,DELETE_FROM_CART,DECREASE_FROM_CART,RESET_CART,MODIFY_CART} from './cartType';
export const addToCart= (items, product) =>(dispatch)=>
{
   const cartItems =items.slice();
    let productAlreadyInCart = false;
    cartItems.forEach(item=>{if((item._id===product._id)&&(item.count<=11)){
        item.count += 1;
        productAlreadyInCart =true;
        
    }})
    if(!productAlreadyInCart){
        cartItems.push({...product,count:1});
    }
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
    return dispatch({
       
        type: ADD_TO_CART,
        payload: { cartItems: cartItems }
    }
    )
}
export const modifyCart= (items, product,countOfProducts) =>(dispatch)=>
{
   const cartItems =items.slice();
    let productAlreadyInCart = false;
    cartItems.forEach(item=>{if(item._id===product._id){
        item.count = countOfProducts;
        productAlreadyInCart =true;
        
    }})
    if(!productAlreadyInCart){
        cartItems.push({...product,count:1});
    }
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
    return dispatch({
       
        type: MODIFY_CART,
        payload: { cartItems: cartItems }
    }
    )
}
export const deleteFromCart = (items, product) => (dispatch) => {
    const cartItems = items.slice().filter((a) => a._id !== product._id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: DELETE_FROM_CART, payload: { cartItems } });
  };

export const decreaseFromCart = (items, product) => (dispatch) => {
    const cartItems =items.slice();
    let productAlreadyInCart = false;
    cartItems.forEach(item=>{if(item._id===product._id && item.count >1){
        item.count =item.count-1;
        productAlreadyInCart =true;
        
    }})
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: DECREASE_FROM_CART, payload: { cartItems } });
  };

export const resetCartRequest=()=>
{
    return{
        type:RESET_CART
    }
}