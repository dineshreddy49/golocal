import React from 'react'
import './Address.css'
import Card from 'react-bootstrap/Card'

function AddressCard(props) {
    return (
        <div className="address-card-container">
            <Card>
            <Card.Header>{props.eachAddress.fullName}</Card.Header>
            <Card.Body>
            <Card.Text>
                <div>{props.eachAddress.address}</div>
                <div>{props.eachAddress.locality}</div>
                <div>{props.eachAddress.mobileNumber}</div>
                <div>{props.eachAddress.state}</div>
                <div>{props.eachAddress.pinCode}</div>
            </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default AddressCard
