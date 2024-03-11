import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/Banner1.jpg'
import img2 from '../assets/Banner2.jpg'
import img3 from '../assets/Banner3.jpg'
import Products from "./Products";

const Home = () => {
  return (
    <div>
    <Carousel className="p-5">
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100 object-fill"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <Products/>
  </div>
  );
};

export default Home;
