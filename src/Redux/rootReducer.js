import {combineReducers} from 'redux'
import signupReducer from './Signup/signupReducer'
import loginReducer from './Login/loginReducer'
import cartReducer from './Cart/cartReducer'
import productReducer from './Products/productReducers'
import addressReducer from './Address/addressReducer'
import placeorderReducer from './Placeorder/OrderReducer'
import myorderReducer from './MyOrder/MyOrderReducer'

const rootReducer=combineReducers({
    signup:signupReducer,
    auth:loginReducer,
    cart:cartReducer,
    product:productReducer,
    addAddress:addressReducer,
    placeorder:placeorderReducer,
    myorder:myorderReducer
})

export default rootReducer 