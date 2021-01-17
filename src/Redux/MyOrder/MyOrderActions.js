import { MY_ORDER_REQUEST,MY_ORDER_SUCCESS,MY_ORDER_FAILURE } from "./MyOrderTypes"
import axios from 'axios'
export const MyOrderRequest=()=>
{
    return{
        type:MY_ORDER_REQUEST
    }
}
export const MyOrderSuccess=users=>
{
    return{
        type:MY_ORDER_SUCCESS,
        payload: users
    }
}
export const MyOrderFailure=error=>
{
    return{
        type:MY_ORDER_FAILURE,
        payload: error
    }
}
export const MyOrder=details=>{
    const id =JSON.parse(window.localStorage.getItem("id"));
    const token = window.localStorage.getItem("token");
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return(dispatch)=>{
        dispatch(MyOrderRequest)
        axios.get(`https://golocal999.herokuapp.com/api/getorders/${id}`,config)
        .then(response =>{
            const MyOrder = response.data
            dispatch(MyOrderSuccess(MyOrder))
        })
        .catch(error=>{
            const errorMsg =error.message
            dispatch(MyOrderFailure(errorMsg))
        })
    }
}
