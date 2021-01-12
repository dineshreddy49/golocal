import {combineReducers} from 'redux'
import signupReducer from './Signup/signupReducer'
import loginReducer from './Login/loginReducer'
import cartReducer from './Cart/cartReducer'
import productReducer from './Products/productReducers'
import addressReducer from './Address/addressReducer'
const rootReducer=combineReducers({
    signup:signupReducer,
    auth:loginReducer,
    cart:cartReducer,
    product:productReducer,
    addAddress:addressReducer
})

export default rootReducer 