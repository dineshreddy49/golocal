import { MY_ORDER_REQUEST,MY_ORDER_SUCCESS,MY_ORDER_FAILURE } from "./MyOrderTypes"
const initialState={
    loading:false,
    available:false,
    data:[],
    error:''
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case MY_ORDER_REQUEST:
           return{
                ...state,
                loading:true
            }
            case MY_ORDER_SUCCESS:
                return{
                    loading:false,
                    available:true,
                    data:action.payload.MyOrder,
                    error:''
                }
                case MY_ORDER_FAILURE:
                    return{
                        loading:false,
                        available:false,
                        data:[],
                        error:action.payload
                    }
                    default: return state
    }
}
export default reducer