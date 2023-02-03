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
                    <h3>청바지</h3>
                    <p>산뜻한 느낌의 데님 바지</p>
                    <img className="d-block w-100 "
                        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5015%2F2012%2F09%2F07%2Fsm500201209070829189050_59_20120907083530.jpg&type=sc960_832"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>                    
                    <h3>긴팔 티셔츠</h3>
                    <p>스마일 긴팔 티셔츠</p>
                    <img
                        className="d-block w-100"
                        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20211222_206%2F1640158948466Ia2JE_JPEG%2FD94A.jpg&type=sc960_832"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <h3>자켓</h3>
                    <p>화려한 자켓</p>
                    <img className="d-block w-100 "

                        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMzBfNTUg%2FMDAxNjE3MDc4MzIzMTY1.rxEHaBzy-JiI8YY_UJkzm6L7yJlnPc0jDYTBwCisVFkg.64hDgwxt0A1ktm7ZKducPM3IJ_Q1zwwn_DdnWaM0GAQg.JPEG.loveu1013%2F160265417966069300_407793257.jpg&type=sc960_832"
                        alt="Third slid"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;