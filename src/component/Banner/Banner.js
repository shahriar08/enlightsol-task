import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import img1 from './image1.jpg';
import img2 from './image2.jpg';
import img3 from './image3.jpg';
import './Banner.css'
const Banner = () => {
    return (
        <Container>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <div className=''>
                        <img
                            className="d-block w-100 rounded-lg"
                            src={img1}
                            height="450"
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <div className='carousel-items'>
                            <div className='contain'>
                                <h3 className='title'>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <a href='/' className='btn btn-lg btn-primary'>Explore</a>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 rounded-lg"
                        src={img2}
                        height="450"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className='carousel-items'>
                            <div className='contain'>
                                <h3 className='title'>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <a href='/' className='btn btn-lg btn-primary'>Explore</a>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded-lg w-80"
                        src={img3}
                        height='450px'
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className='carousel-items'>
                            <div className='contain'>
                                <h3 className='title'>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <a href='/' className='btn btn-lg btn-primary'>Explore</a>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;