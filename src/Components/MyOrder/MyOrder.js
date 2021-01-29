import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {myOrder} from '../../Redux/index';
import MyOrderCard from './MyOrderCard';
import MyOrderSkeleton from './MyOrderSkeleton';
function MyOrder() {
    let content =null;
    const order = useSelector(state=>state.myorder)
    console.log(order)
    const dispatch = useDispatch();
    const n = 2;
    useEffect(() => { dispatch(myOrder())}, [])
    if(order.data){
        content=order.data.map((userorder,key)=>(
            <div key={key}>
                <MyOrderCard userorder={userorder}/>
            </div>
        ))
    }
    {console.log(order.loading)}
    return (
        <div>
        {order.loading && [...Array(n)].map((e, i) =><div key={i}><p className="each-product"><MyOrderSkeleton/></p></div>
        ) }
        {order.error &&  <p>Error fetching the data please check your internet connection</p>}
            <div>{content}</div>
        </div>
    )
}

export default MyOrder