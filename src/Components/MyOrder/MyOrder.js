// import React,{useState,useEffect} from 'react'
// import { useDispatch, useSelector  } from 'react-redux';
// import {Container,Row,Col} from 'react-bootstrap'
// import Productcard from '../ProductsCard/ProductCard'
// import ProductCardSkeleton from '../ProductsCard/ProductCardSkeleton'

// function MyOrder() {
//     const order = useSelector(state => state.myorder)
//     let content =null
//     const dispatch = useDispatch();
//     useEffect(() => {dispatch(MyOrder())}, [])
//     const n = 10;
//     if(order.data){
//         content=order.data.map((orders,key)=>
//         <div key={key}>
//         <Col className="each-product"><Productcard orders={orders}/></Col>
//         </div>
//         )
//     }

//     return (
//         <div>
//             <div className="cart-items">
//         <h2>MY GOLOCAL ORDERS({order.length})</h2>
//           <Container className="products-container" >
//           <Row xs={1} md={1}>
//           {order.loading && [...Array(n)].map((e, i) =><div key={i}><Col className="each-product"><ProductCardSkeleton /></Col></div>
//           ) }
//           {order.error &&  <Col>Error fetching the data please check your internet connection</Col>}
//           {content}
//           </Row>
//         </Container>
//         </div>
//         </div>
//     )
// }

// export default MyOrder
