import React from 'react'
import './ProductCard.css'
import {Card,Col,Media} from 'react-bootstrap'
import Skeleton from '@material-ui/lab/Skeleton';
function ProductCardSkeleton() {
    return (
        <div className="content">
        <row>
        <Col>
           <Card border="dark" className="prod-card" >
           <Media>
           <Skeleton variant="rect"
                   className="mr-3" />
           <Media.Body className="prod-body">
             <Skeleton variant="text" />
             <Skeleton variant="text" />
           </Media.Body>
         </Media>
       </Card>
       </Col>
       </row>
        </div>
    )
}

export default ProductCardSkeleton
