import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

function Product({ title, price, img, productInfo, itemId }) {
  return (
    <div className='item-card' key={itemId}>
      <Link to={`/product/detail/${itemId}`}>
        <div className='item-image-container'>
          <img src={img} alt={img} className='item-image'></img>
        </div>
        <div className='item-title'>{title}</div>
        <div className='item-price'>{price}</div>
      </Link>
    </div>
  );
}

export default Product;
