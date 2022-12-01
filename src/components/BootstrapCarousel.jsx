import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import tajmahal from "../assets/tajmahal.jpg";
import eiffeltower from "../assets/eiffeltower.jpg";
import greek from "../assets/greek.jpg";
import domluisbridge from "../assets/domluisbridge.jpg";
import Image from 'react-bootstrap/Image'
import operahouse from "../assets/sydneyoperahouse.png";
import versailles from "../assets/versailles.png";
import zocalomexico from "../assets/zocalomexico.png";


function BootstrapCarousel() {
  return (
    <div>
      <div className='DivCarousel'>
    <Carousel style={{width: "60%"}}>
      <Carousel.Item>
        <Image fluid
          className="d-block w-100"
          src={domluisbridge}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tajmahal}
          alt="Second slide"
        />

        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={zocalomexico}
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
          src={operahouse}
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
          src={versailles}
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
