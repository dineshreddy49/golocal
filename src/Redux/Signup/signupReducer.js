import { USER_SIGNUP_FAILURE,USER_SIGNUP_REQUEST,USER_SIGNUP_SUCCESS } from "./signupTypes"
const initialState={
    loading:false,
    signedup:false,
    users:[],
    error:''
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case USER_SIGNUP_REQUEST:
           return{
                ...state,
                loading:true,
                signedup:false
            }
            case USER_SIGNUP_SUCCESS:
                return{
                    loading:false,
                    signedup:true,
                    users:action.payload,
                    error:''
                }
                case USER_SIGNUP_FAILURE:
                    return{
                        loading:false,
                        signedup:false,
                        users:[],
                        error:action.payload
                    }
                    default: return state
    }
}
export default reducer