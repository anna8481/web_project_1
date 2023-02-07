import { Carousel } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import './Slider.css';
import { Link } from 'react-router-dom';
// import { getImageUrl } from '/';
import * as Api from "../utills/api";

// async function addImageCards() {
//     const categorys = await Api.get("categorylist");

//     for (const category of categorys) {
//         const {_id, title, description, imageKey } = category;
//         const imageUrl = await getImageUrl(imageKey);
//     }
// }

// const card = document.querySelector(`#category-${_id}`);
// card.addEventListener("click", navigate(`/product/list/?categort=${title}`));


function Slider() {
    const [category, setCategory] = useState(undefined);

    const init = async () => {
        const res = await Api.get("categorylist");
        const data = await res.data;
        console.log(data)
        data.map(item => console.log(item.title));
        setCategory(data);
    };
    useEffect(() => {
        init();
    }, []);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='main-slider'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    {Array.isArray(category) && category.map(item => (
                        <Link to={`/product/list/${item.title}`} >
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <img src={"https://res.cloudinary.com/moteam/image/upload/" + item.imageKey + ".png"} />
                            </div>
                        </Link>
                    ))}

                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;



