import React from 'react'
import {Container,Row,Col,Media,Nav,Card} from 'react-bootstrap'

function ItemsCard(props) {
    return (
        <div>
            <Media>
                <Media.Body className="prod-body">
                <h5>{props.useritems._id}</h5>
                <p>
                Quantity:{props.useritems.purchasedQty}
                </p>
                <p>
                RS:{props.useritems.payablePrice}₹/-
                </p>
                </Media.Body>
            </Media>
        </div>
    )
}

export default ItemsCard
