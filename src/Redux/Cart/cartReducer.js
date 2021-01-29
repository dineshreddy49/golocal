import {ADD_TO_CART,DELETE_FROM_CART,DECREASE_FROM_CART,RESET_CART} from './cartType';
const initialState={
    items:[]
}
const cartReducer=(state = initialState,action)=>{
    switch(action.type)
    {
        case ADD_TO_CART:
            return{
            items:action.payload.cartItems
            }
        case DELETE_FROM_CART:
            return { ...state, items: action.payload.cartItems };
        case DECREASE_FROM_CART:
            return { ...state, items: action.payload.cartItems };
            case RESET_CART:
            return {...initialState} 
        default: return state
    }

}
export default cartReducer