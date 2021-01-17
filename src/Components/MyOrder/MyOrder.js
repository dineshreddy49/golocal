import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {myOrder} from '../../Redux/index'
import MyOrderCard from './MyOrderCard'


function MyOrder() {
    let content =null;
    const order = useSelector(state=>state.myorder)
    console.log(order)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(myOrder())}, [])
    if(order.data){
        content=order.data.map((userorder,key)=>(
            <div key={key}>
                <MyOrderCard userorder={userorder}/>
            </div>
        ))
    }
    return (
        <div>
            <div>he am working</div>
            <div>{content}</div>
        </div>
    )
}

export default MyOrder
