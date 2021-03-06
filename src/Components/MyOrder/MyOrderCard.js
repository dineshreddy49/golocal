import React from 'react'
import {Row,Col,Media,Card} from 'react-bootstrap'
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
        <div className="cart-items-1">
            <Card>
                <Card.Header className= "order-header">
                    <Row xs={2} md={4} lg={4}>
                        <Col ><h5 className="order-placed">ORDER ID :{props.userorder._id} </h5></Col>
                        <Col ><h5 className="order-content1">TOTAL :₹{props.userorder.totalAmount}</h5></Col>
                        <Col ><h5 className="order-content1">PAYMENT TYPE :{props.userorder.paymentType}</h5></Col>
                    </Row>
                       
                </Card.Header>
                {/* <Card.Title>{props.userorder.paymentStatus}</Card.Title> */}
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
