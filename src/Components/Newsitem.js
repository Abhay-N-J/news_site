import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import fetch from 'node-fetch';

import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let {title, url_image, description, url } = this.props;
    // console.log(title);
    return (
      <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={url_image?url_image:""} />
            <Card.Body>
                  <Card.Title>{title?title.slice(0,50)+"...":""}</Card.Title>
                  <Card.Text>
                    {description?description.slice(0,100)+"...":""}
                  </Card.Text>
                  <Button variant="primary" href = {url} target = "_blank">Read Full News</Button>
            </Card.Body>
      </Card>
        );    

  }
}

export default Newsitem;
