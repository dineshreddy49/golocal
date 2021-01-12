import React,{useState,useEffect} from 'react'
import Productcard from '../ProductsCard/ProductCard'
import {Container,Row,Col} from 'react-bootstrap'
import './Products.css'
import ProductCardSkeleton from '../ProductsCard/ProductCardSkeleton'
import { getProducts } from '../../Redux/Products/productActions'
import { useDispatch,useSelector } from 'react-redux';
function Products(props) {
    const products= useSelector(state=>state.product)
    const dispatch = useDispatch();
    useEffect(() => {
        
        dispatch(getProducts())}, [])
    let content =null
    const n = 10;
    if(products.loading)
    {
        content=[...Array(n)].map((e, i) =><div key={i}><Col className="each-product"><ProductCardSkeleton /></Col></div>
        )}
    if(products.error)
    {
        content=<p>Error fetching the data please check your internet connection</p>
    }
    
    if(products.data)
    {
        content=products.data.filter((product)=>{
            if(props.search===""){
                return product
            }else if(product.name.toLowerCase().includes(props.search.toLowerCase())){
                return product
            }
        }).map((product,key)=>
        <div key={key}>
        <Col className="each-product"><Productcard product={product}/></Col>
        
  </div>
        )
    }
    return (
        <div>
          <Container className="products-container" >
          <Row xs={1} md={2}>
          {content}
          </Row>
        </Container>
        </div>
        
 )
}
export default Products
