import React, { useState, useEffect, useParams } from 'react';
import { useNavigate } from 'react-router-dom'
import * as Api from "../../utills/api";
import Header from '../../components/Header'

function ProductDetail({ userId, title, price, img, productInfo }) {

    const { id } = useParams();
    console.log("params", id)
    return (<>

        <div className='section'>
            <Header title={title}></Header>
            <div className="container" key={userId}>
                <div className="product-detail-img"><img src></img></div>
                <div className="product-detail-img"></div>

            </div>
        </div>
    </>
    );
}

export default ProductDetail;

// import React, { useState } from 'react';

// const Product = ({ name, image, description, price }) => {
//     const [selectedProduct, setSelectedProduct] = useState(null);

//     const handleClick = () => {
//         setSelectedProduct({ name, image, description, price });
//     };

//     if (selectedProduct) {
//         return (
//             <ProductDetail
//                 name={selectedProduct.name}
//                 image={selectedProduct.image}
//                 description={selectedProduct.description}
//                 price={selectedProduct.price}
//             />
//         );
//     }

//     return (
//         <div onClick={handleClick}>
//             <h2>{name}</h2>
//             <img src={image} alt={name} />
//             <p>{price}</p>
//         </div>
//     );
// };

// const ProductDetail = ({ name, image, description, price }) => (
//     <div>
//         <h2>{name}</h2>
//         <img src={image} alt={name} />
//         <p>{description}</p>
//         <p>{price}</p>
//     </div>
// );