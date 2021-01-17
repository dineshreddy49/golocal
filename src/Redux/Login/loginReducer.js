import { USER_LOGIN_FAILURE,USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGOUT_REQUEST } from "./loginTypes"
const initialState={
    loading:false,
    authenticated:false,
    users:[],
    error:false
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
           return{
                ...state,
                loading:true
            }
            case USER_LOGIN_SUCCESS:
                return{
                    loading:false,
                    authenticated:true,
                    users:action.payload,
                    error:false
                }
                case USER_LOGIN_FAILURE:
                    return{
                        loading:false,
                        authenticated:false,
                        users:[],
                        error:true
                    }
                    case USER_LOGOUT_REQUEST:
                    return{
                        ...initialState,
                    }
                    default: return state
    }
}
export default reducer