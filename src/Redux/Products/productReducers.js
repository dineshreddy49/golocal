import {GET_PRODUCTS,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAILURE} from './productTypes'
const initialState={
    loading:false,
    available:false,
    data:[],
    error:''
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_PRODUCTS:
           return{
                ...state,
                loading:true
            }
            case GET_PRODUCTS_SUCCESS:
                return{
                    loading:false,
                    available:true,
                    data:action.payload.products,
                    error:''
                }
                case GET_PRODUCTS_FAILURE:
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