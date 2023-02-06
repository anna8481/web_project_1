import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Product.css'
import { ROUTE } from '../utills/route'



function Product({ key, title, price, img, productInfo }) {
    // const [selectedProduct, setSelectedProduct] = useState(null);
    // const handleClick = () => {
    //     setSelectedProduct({ key, title, price, img, productInfo });
    // };
    // if (selectedProduct) {
    //     return (
    //         <ProductDetail
    //             key={selectedProduct.key}
    //             title={selectedProduct.title}
    //             img={selectedProduct.img}
    //             description={selectedProduct.productInfo}
    //             price={selectedProduct.price}
    //         />
    //     );
    // }

    return (
        <div className='item-card'  >
            <Link to={ROUTE.PRODUCT_DETAIL.link + '/' + key} >
                <img src={img} className="item-image" ></img>
                <div className="item-title">{title}</div>
                <div className="item-price">{price}</div>
            </Link >
        </div >
    )
}


//style={{ width: '100%' }}

export default Product