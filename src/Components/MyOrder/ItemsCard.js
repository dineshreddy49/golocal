import React from 'react'
import {Container,Row,Col,Media,Nav,Card} from 'react-bootstrap'
import generatePublicUrl from '../../urlconfig'

function ItemsCard(props) {
    return (
        <div>
            <Media>
            <img
                width={64}
                height={64}
                className="mr-3"
                src={generatePublicUrl(props.useritems.productId._id)} 
                alt="not displayed"
            />
                <Media.Body className="prod-body">
                <h5> {props.useritems.productId.name}</h5>
                <p>
                Quantity: {props.useritems.count} 
                </p>
                <p>
                RS: {props.useritems.price} ₹/-
                </p>
                </Media.Body>
            </Media>
        </div>
    )
}

export default ItemsCard
