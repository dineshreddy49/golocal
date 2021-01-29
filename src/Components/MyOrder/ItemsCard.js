import React from 'react'
import {Media} from 'react-bootstrap'
import generatePublicUrl from '../../urlconfig'

function ItemsCard(props) {
    return (
        <div>
            <Media>
            <img
                width={150}
                height={150}
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
