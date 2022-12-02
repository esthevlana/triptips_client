import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import cuba from "../assets/cuba.jpg";
import italy from "../assets/italy.jpg";
import Image from 'react-bootstrap/Image'
import louvre from "../assets/louvre.jpg";
import riodejaneiro from "../assets/riodejaneiro.jpg";
import uruguay from "../assets/uruguay.jpg";


function BootstrapCarousel() {
  return (
    <div>
      <div className='DivCarousel'>
    <Carousel style={{width: "60%"}}>
      <Carousel.Item>
        <Image fluid
          className="d-block w-100"
          src={cuba}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={italy}
          alt="Second slide"
        />

        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={louvre}
          alt="Third slide"
        />

        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={riodejaneiro}
          alt="Third slide"
        />

        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={uruguay}
          alt="Third slide"
        />

        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default BootstrapCarousel
