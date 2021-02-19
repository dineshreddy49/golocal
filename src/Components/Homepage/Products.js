import {  Row, Container, Col, Image} from 'react-bootstrap'
import butter from '../../images/butter.jpg'
import './Products.css'
import cheese from '../../images/cheese.png'
import ghee from '../../images/ghee.png'
import milk from '../../images/milk.png'
import paneer from '../../images/paneer.png'

function Products() {
    

    return (
        <>
        <Container className= "newcontainer">
        <h1 className = "textedit-1">Our Goal</h1>
        <h4 className = "textedit">Getting quality dairy products is difficult these days, don't worry Go Local delivers</h4>
        <h4 className = "textedit">all products right from our dairy farms at your doorstep</h4><br />
        <Row>
            <Col  className= "trial" >
                <Image className = "butter" src = { butter} roundedCircle />
                <p className = "buttername">Butter</p>
            </Col>
            <Col  className= "trial">
                <Image className = "cheese" src = { cheese} roundedCircle />
                <p className = "cheesename">Cheese</p>
            </Col>
            <Col  className= "trial" >
                <Image className = "ghee" src = { ghee} roundedCircle />
                <p className = "gheename">Ghee</p>
            </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
            <Col className = "trial">
                <Image className = "butter" src = { milk} roundedCircle />
                <p className = "buttername">Milk</p>
            </Col>
            <Col className = "trial">
                <Image className = "cheese" src = { paneer} roundedCircle />
                <p className = "cheesename">Paneer</p>
            </Col>
            <Col className = "trial">
                <Image className = "ghee" src = { ghee} roundedCircle />
                <p className = "gheename">Ghee</p>
            </Col>
        </Row>
        </Container>
        <br />
        </>
    )
}

export default Products;