import { USER_LOGIN_FAILURE,USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGOUT_REQUEST } from "./loginTypes"
import axios from 'axios'
export const loginRequest=()=>
{
    return{
        type:USER_LOGIN_REQUEST
    }
}
export const loginSuccess=users=>
{
    return{
        type:USER_LOGIN_SUCCESS,
        payload: users
    }
}
export const loginFailure=error=>
{
    return{
        type:USER_LOGIN_FAILURE,
        payload: error
    }
}
export const logoutRequest=()=>
{
    localStorage.clear();
    return{
        type:USER_LOGOUT_REQUEST
    }
}
export const loginUser=details=>{
    return(dispatch)=>{
        dispatch(loginRequest)
        axios.post('https://golocal999.herokuapp.com/api/signin',details)
        .then(response =>{
            const users = response.data
            const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("id", JSON.stringify(user._id));
            dispatch(loginSuccess(users))
        })
        .catch(error=>{
            const errorMsg =error.message
            dispatch(loginFailure(errorMsg))
        })
    }
}
export const isUserLoggedIn = () => {
    return async (dispatch) => {
      const token = localStorage.getItem("token");
      if (token) {
        const user = JSON.parse(localStorage.getItem("user"));
        loginSuccess(user)
      } else {
        const errorMsg = "Failed to login"
            dispatch(loginFailure(errorMsg));
      }
    };
  };