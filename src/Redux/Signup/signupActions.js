import { USER_SIGNUP_FAILURE,USER_SIGNUP_REQUEST,USER_SIGNUP_SUCCESS } from "./signupTypes"
import axios from 'axios'
export const signupRequest=()=>
{
    return{
        type:USER_SIGNUP_REQUEST
    }
}
export const signupSuccess=users=>
{
    return{
        type:USER_SIGNUP_SUCCESS,
        payload: users
    }
}
export const signupFailure=error=>
{
    return{
        type:USER_SIGNUP_FAILURE,
        payload: error
    }
}
export const signupUser=details=>{
    return(dispatch)=>{
        dispatch(signupRequest)
        axios.post('https://golocal999.herokuapp.com/api/signup',details)
        .then(response =>{
            const users = response.data
            dispatch(signupSuccess(users))
        })
        .catch(error=>{
            const errorMsg =error.message
            dispatch(signupFailure(errorMsg))
        })
    }
}