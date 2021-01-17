import { PLACE_ORDER_FAILURE,PLACE_ORDER_REQUEST,PLACE_ORDER_SUCCESS } from "./OrderTypes"
const initialState={
    loading:false,
    isOrderSuccess:false,
    orders:[],
    error:false
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case PLACE_ORDER_REQUEST:
           return{
                ...state,
                loading:true
            }
            case PLACE_ORDER_SUCCESS:
                return{
                    loading:false,
                    order:action.payload.order,
                    isOrderSuccess:true,
                    error:false
                }
                case PLACE_ORDER_FAILURE:
                    return{
                        loading:false,
                        isOrderSuccess:false,
                        order:[],
                        error:true
                    }

                default: return state
    }
}
export default reducer