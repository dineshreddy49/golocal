import { RESET_ADDRESS,ADD_ADDRESS_FAILURE,ADD_ADDRESS_REQUEST,ADD_ADDRESS_SUCCESS,GET_ADDRESS_FAILURE,GET_ADDRESS,GET_ADDRESS_SUCCESS,SELECTED_ADDRESS  } from "./AddressType"
const initialState={
    loading:false,
    addressAdded:false,
    selectedAddress:'',
    address:[],
    error:''
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_ADDRESS_REQUEST:
           return{
                ...state,
                loading:true,
                addressAdded:false
            }
            case ADD_ADDRESS_SUCCESS:
                return{
                    loading:false,
                    addressAdded:true,
                    address:action.payload,
                    selectedAddress:'',
                    error:''
                }
                case ADD_ADDRESS_FAILURE:
                    return{
                        loading:false,
                        signedup:false,
                        address:[],
                        selectedAddress:'',
                        error:action.payload
                    }
                    case GET_ADDRESS:
                        return{
                             ...state,
                             loading:true
                         }
                         case GET_ADDRESS_SUCCESS:
                             return{
                                 loading:false,
                                 available:true,
                                 address:action.payload.data,
                                 selectedAddress:'',
                                 error:''
                             }
                             case GET_ADDRESS_FAILURE:
                                 return{
                                     loading:false,
                                     available:false,
                                     address:[],
                                     selectedAddress:'',
                                     error:action.payload
                                 }
                                 case SELECTED_ADDRESS:
                                    return{
                                        loading:false,
                                        selectedAddress:action.payload.eachAddress,
                                        address:action.payload.UserAddress,
                                        error:''
                                    }
                                    case RESET_ADDRESS:
                                    return{
                                        ...initialState
                                    }
                    default: return state
    }
}
export default reducer