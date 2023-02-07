import React, { useState, useEffect } from "react";
import { Link, } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Product.css'
import { ROUTE } from '../utills/route'



function Product({ title, price, img, productInfo, itemId }) {

    const params = useParams();
    // console.log("userid", itemId)
    // console.log("title", title)
    // console.log("price", price)

    return (
        <div className='item-card'  >
            <Link to={`/product/detail/${itemId}`}>
                <img src={img} className="item-image" ></img>
                <div className="item-title">{title}</div>
                <div className="item-price">{price}</div>
            </Link >
        </div >
    )
}


export default Product