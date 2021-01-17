import { PLACE_ORDER_FAILURE,PLACE_ORDER_REQUEST,PLACE_ORDER_SUCCESS } from "./OrderTypes"
import axios from 'axios'


export const OrderRequest=()=>
{
    return{
        type:PLACE_ORDER_REQUEST
    }
}
export const OrderSuccess=users=>
{
    return{
        type:PLACE_ORDER_SUCCESS,
        payload: users
    }
}
export const OrderFailure=error=>
{
    return{
        type:PLACE_ORDER_FAILURE,
        payload: error
    }
}

export const placeOrder=details=>{
    const token = window.localStorage.getItem("token");
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return(dispatch)=>{
        dispatch(OrderRequest)
        axios.post('https://golocal999.herokuapp.com/api/addOrder',details,config)
        .then(response =>{
            const order = response.data;
            dispatch(OrderSuccess(order))
        })
        .catch(error=>{
            const errorMsg =error.message
            dispatch(OrderFailure(errorMsg))
        })
    }
}
