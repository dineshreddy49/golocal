import React from 'react'
import { Card, Button } from 'react-bootstrap'
import image1 from '../../images/img1.png'
import './Homepageheader.css'
import Highlighter from "react-highlight-words";


function Homepageheader(){
    

    return (
        <>
          <div className="homepage-final">
          <div className= "homepage" >
          <Card className="bg-dark text-white">
            <Card.Img src= { image1 } />
              <Card.ImgOverlay className = "positiontext">
                <Card.Title className = "cardtitle" >Welcome to Go Local !</Card.Title>
                <Card.Text className= "newtext" >We deliver the purest form of milk products</Card.Text >
                <Card.Text >
                <Highlighter
                  className= "newtext"
                  highlightClassName="YourHighlightClass"
                  searchWords={["11 pm", "6 am"]}
                  autoEscape={true}
                  textToHighlight=" Order by
                  11 pm get by next morning  6 am"
                />
                </Card.Text>
              <Button className="button" variant="primary" >Order Now</Button>
            </Card.ImgOverlay>
          </Card>
        </div>
          </div>
        </>
    )
}

export default Homepageheader;