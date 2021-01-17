import React from 'react'
import { useSelector, useDispatch  } from 'react-redux';
import {Container,Row,Col,Media,Nav,Card} from 'react-bootstrap'
import './MyOrder.css'
import ItemsCard from './ItemsCard';

function MyOrderCard(props) {
    let content = null;
    if(props.userorder.items){
        content=props.userorder.items.map((useritems,key)=>(
            <div key={key}>
                <ItemsCard useritems={useritems}/>
            </div>
        ))
    }

    return (
        <div className="cart-items">
            <Card>
                <Card.Header className= "order-header">
                    <Row xs={2} md={4} lg={4}>
                        <Col ><p className="order-placed">ORDER PLACED </p></Col>
                        <Col ><p className="order-content1">TOTAL</p></Col>
                    </Row>
                    <Row xs={2} md={4} lg={4}>
                        <Col><p className="order-placed">{props.userorder._id}</p></Col>
                        <Col><p className="order-content1">₹{props.userorder.totalAmount}</p></Col>
                    </Row>    
                </Card.Header>
                <Card.Title>{props.userorder.paymentStatus}</Card.Title>
                <Media >
                    <Media.Body>
                        {content}
                    </Media.Body>
                </Media>
            </Card>
        </div>
    )
}

export default MyOrderCard
