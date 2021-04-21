import React from 'react'
import Image1 from './photos/blanco.jpeg'
import Image2 from './photos/torchys_.jpeg'
import Image3 from './photos/fundito_.jpeg'
import Image4 from './photos/fuzzys_.png'
import Image5 from './photos/illegal_petes.jpeg'
import Carousel from 'react-bootstrap/Carousel'


export default function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Image1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 >Queso Blanco</h3>
                <h4>Hacienda Colorado</h4>
                <p className="card-slogan">Middle of the road with a middle of the road price, but HEY its still melted cheese..am I right?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Image2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Green Chile Queso</h3>
                <h4>Torchy's Tacos</h4>
                <p className="card-slogan">Workhorse. Always good, cheap, and accessible. However, it can be a little on the cold side  </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Image3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Queso Fundito</h3>
                <h4>North County</h4>
                <p className="card-slogan">#1 favorite! The Cheese is more of a stringy consistency. A little Pricy, but WORTH it</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Image4}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 >Queso with Beef</h3>
                <h4>Fuzzy's Tacos</h4>
                <p className="card-slogan">Best bang for your buck! Plus who doesn't like it BEEFY</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Image5}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 >Queso Dip</h3>
                <h4>Illegal Pete's</h4>
                <p className="card-slogan">Great option for those who like to keep it SPICY! Awesome Margaritas to pair with it too</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
