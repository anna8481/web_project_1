import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import './Slider.css';

function Slider() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='main-slider'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="d-block w-100 "
                        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5015%2F2012%2F09%2F07%2Fsm500201209070829189050_59_20120907083530.jpg&type=sc960_832"
                        alt="First slide"
                    />

                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="slider-img">
                        <img
                            className="d-block w-100"
                            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20211222_206%2F1640158948466Ia2JE_JPEG%2FD94A.jpg&type=sc960_832"
                            alt="Second slide"
                        /></div>


                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 "

                        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMzBfNTUg%2FMDAxNjE3MDc4MzIzMTY1.rxEHaBzy-JiI8YY_UJkzm6L7yJlnPc0jDYTBwCisVFkg.64hDgwxt0A1ktm7ZKducPM3IJ_Q1zwwn_DdnWaM0GAQg.JPEG.loveu1013%2F160265417966069300_407793257.jpg&type=sc960_832"
                        alt="Third slide"
                    />


                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>

                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;