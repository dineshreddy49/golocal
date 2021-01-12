import {GET_PRODUCTS,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAILURE} from './productTypes'
import axios from 'axios'
export const productsRequest=()=>
{
    return{
        type:GET_PRODUCTS
    }
}
export const productsSuccess=products=>
{
    return{
        type:GET_PRODUCTS_SUCCESS,
        payload: products
    }
}
export const productsFailure=error=>
{
    return{
        type:GET_PRODUCTS_FAILURE,
        payload: error
    }
}
export const getProducts=details=>{
    return(dispatch)=>{
        dispatch(productsRequest())
        axios.get('https://golocal999.herokuapp.com/api/getproduct')
        .then(response =>{
            const products = response.data
            console.log(products)
            dispatch(productsSuccess(products))
        })
        .catch(error=>{
            const errorMsg =error.message
            dispatch(productsFailure(errorMsg))
        })
    }
}