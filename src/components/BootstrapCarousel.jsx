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
          <h3>Cuba</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={italy}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Italy</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={louvre}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>
            France
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={riodejaneiro}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>
            Rio de Janeiro
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={uruguay}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>
            Uruguay
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default BootstrapCarousel
