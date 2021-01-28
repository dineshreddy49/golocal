import React from 'react'
import './MyOrder.css'
import {Container,Row,Col,Media,Nav,Card} from 'react-bootstrap'
import Skeleton from '@material-ui/lab/Skeleton';
function MyOrderSkeleton() {
    return (
        <div className="cart-items">
        <Card>
            <Card.Header className= "order-header">
                <Row xs={2} md={4} lg={4}>
                    <Col ><p className="order-placed"><Skeleton variant="text" /></p></Col>
                    <Col ><p className="order-content1"><Skeleton variant="text" /></p></Col>
                </Row>
                <Row xs={2} md={4} lg={4}>
                    <Col><p className="order-placed"><Skeleton variant="text" /></p></Col>
                    <Col><p className="order-content1"><Skeleton variant="text" /></p></Col>
                </Row>    
            </Card.Header>
            {/* <Card.Title>{props.userorder.paymentStatus}</Card.Title> */}
            <Media >
                <Media.Body>
                <Skeleton variant="text" />
                </Media.Body>
            </Media>
        </Card>
    </div>
    )
}

export default MyOrderSkeleton
