import React from 'react'
import {Card,Col,Row,Media,Button} from 'react-bootstrap'
import './ProductCard.css'
import {addToCart} from '../../Redux'
import generatePublicUrl from '../../urlconfig'
import { useDispatch, useSelector  } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from 'light-toast';

toast.configure()
function Productcard(props) {
  const cartItems= useSelector(state=>state.cart.items)
  const dispatch = useDispatch();
   // const img=props.product.productPictures.map(function(thumb, index){
   //     return(<img
   //         width={150}
  //          height={150}
  //          className="mr-3" index={index} src={generatePublicUrl(thumb.img)} alt="text here" />)
//
  //  })

    const handleAddToCart=(e)=>{
      Toast.success(props.product.name+' is added to cart',{position:toast.POSITION.TOP_CENTER});
      dispatch(addToCart(cartItems,props.product))
    }
    return (
 <div className="content">
 <Row>
 <Col>
    <Card border="dark" className="prod-card" >
    <Media>
    <img
            className="mr-3" src={generatePublicUrl(props.product._id)} alt="not displayed" />
    <Media.Body className="prod-body">
      <h5>{props.product.name}</h5>
      <p>
      RS:{props.product.price}₹/-
      </p>
    </Media.Body>
    <Button variant="outline-primary" className="add-button" onClick={handleAddToCart}>Add</Button>

  </Media>
</Card>
</Col>
</Row>
         </div>
    )
}
export default Productcard
