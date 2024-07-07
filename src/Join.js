//Interactive Process: The interactive process shown on this page is follow instructions & communicate
import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import fillerImage from './images/filler-image.jpeg';

function Join() {
  const [progressValue, setProgressValue] = useState(0);

  const handleIncreaseClick = () => {
    // Increase the progress value by 5, ensuring it doesn't exceed 100
    setProgressValue(prevValue => Math.min(prevValue + 25, 100));
  };

  const handleDecreaseClick = () => {
    // Decrease the progress value by 5, ensuring it doesn't go below 0
    setProgressValue(prevValue => Math.max(prevValue - 25, 0));
  };

  return (
    <div className="join-page">

      <h1 className="join-page-title"> <span className="join-page-title-special">JOIN TODAY - BECOME A CHAMPION</span> </h1>

      <ProgressBar id="progress-bar" variant="special-progress-colour" now={progressValue} label={`${progressValue}%`} />

      <div className="form-side">
        <Form className="form-content">
          <Form.Group className="mb-3" controlId="enterEmail">
            <Form.Label><strong>Email address:</strong></Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted"> We'll never share your email with anyone else. </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="enterFirstName">
            <Form.Label><strong>First name:</strong></Form.Label>
            <Form.Control type="text" placeholder="John" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="enterMiddleName">
            <Form.Label><strong>Middle name:</strong></Form.Label>
            <Form.Control type="text" placeholder="Optional" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="enterLastName">
            <Form.Label><strong>Last name:</strong></Form.Label>
            <Form.Control type="text" placeholder="Doe" />
          </Form.Group>
        </Form>

        <div className="button-group">
          <Button className="form-buttons-progress" onClick={handleDecreaseClick}>PREVIOUS</Button>
          <Button className="form-buttons-progress" onClick={handleIncreaseClick}>NEXT</Button>
        </div>
      </div>

      <div className="carousel-side">
        <h1 className = "express-opinion-title"> <span className="express-opinion-title-underline">EXPRESS AN OPINION</span></h1>

        <Carousel id = "carousel" fade>
          <Carousel.Item>
            <img className="d-block w-100" src = {fillerImage} />
            <Carousel.Caption>
              <h3> Josh Smith - Endorsement </h3>
              <p> I love this club, you should absolutely join! </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src = {fillerImage} />
            <Carousel.Caption>
              <h3> Maria Foo - Endorsement </h3>
              <p> This club made me a pro. </p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img className="d-block w-100" src = {fillerImage} />
            <Carousel.Caption>
              <h3> Anne Catherine - Endorsement </h3>
              <p> I approve of this club. I have been a member for over 5 years! </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="button-group">
          <Button className="express-opinion-button">WRITE A REVIEW</Button>
        </div>
      </div>
    </div>
  );
}

export default Join;
