import { ADD_ADDRESS_FAILURE,ADD_ADDRESS_REQUEST,ADD_ADDRESS_SUCCESS,GET_ADDRESS,GET_ADDRESS_SUCCESS,GET_ADDRESS_FAILURE,SELECTED_ADDRESS } from "./AddressType"
import axios from 'axios';

export const addAddressRequest=()=>
{
    return{
        type:ADD_ADDRESS_REQUEST
    }
}
export const addAddressSuccess=address=>
{
    return{
        type:ADD_ADDRESS_SUCCESS,
        payload: address
    }
}
export const addAddressFailure=error=>
{
    return{
        type:ADD_ADDRESS_FAILURE,
        payload: error
    }
}
export const getAddressRequest=()=>
{
    return{
        type:GET_ADDRESS
    }
}
export const getAddressSuccess=address=>
{
    return{
        type:GET_ADDRESS_SUCCESS,
        payload: address
    }
}
export const getAddressFailure=error=>
{
    return{
        type:GET_ADDRESS_FAILURE,
        payload: error
    }
}
export const selectedAddress=address=>
{
    return{
        type:SELECTED_ADDRESS,
        payload: address
    }
}
export const addAddress=addressDetails=>{
    const token = window.localStorage.getItem("token");
    const config = {
        headers: { Authorization: `Bearer ${token}` }
       
    };
    return(dispatch)=>{
        dispatch(addAddressRequest)
        axios.post('https://golocal999.herokuapp.com/api/address',addressDetails,config)
        .then(response =>{
            const address = response.data
            dispatch(addAddressSuccess(address))
        })
        .catch(error=>{
            const errorMsg =error.message
            dispatch(addAddressFailure(errorMsg))
        })
    }
}
export const getAddress=()=>{
    const id =JSON.parse(window.localStorage.getItem("id"));
    const token = window.localStorage.getItem("token");
    const config = {
        headers: { Authorization: `Bearer ${token}` }
       
    };
    return(dispatch)=>{
        dispatch(getAddressRequest())
        axios.get(`https://golocal999.herokuapp.com/api/get-addresses/${id}`,config)
        .then(response =>{
            const address = response.data
            dispatch(getAddressSuccess(address))
        })
        .catch(error=>{
            const errorMsg =error.message
            dispatch(getAddressFailure(errorMsg))
        })
    }
}