import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import * as Api from "../../utills/api";
import Header from '../../components/Header'
import './ProductDetail.css'


function ProductDetail() {
    const { id } = useParams()
    const [item, setItem] = useState([]);
    const navigate = useNavigate();

    const init = async () => {
        const res = await Api.get(`products/${id}`);
        const data = await res.data;
        console.log("Data:", data)
        setItem({ ...data });

    };
    useEffect(() => {
        init();
    }, []);


    const handleAddToCart = () => {
        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        console.log("currentCart:", currentCart);
        const existingProductIndex = currentCart.findIndex(
            (cart) => cart._id === item._id
        );

        if (existingProductIndex !== -1) {
            // 이미 존재하면 alert, 카트로 가기
            alert("장바구니에 이미 상품이 존재합니다.");
            navigate('/cart');
            return;
        }

        localStorage.setItem('cart', JSON.stringify([...currentCart, item]));
        alert("장바구니에 상품을 추가했습니다.");
        navigate('/cart', { state: { item } });

    };


    return (<>
        {/* <h1>{id}</h1> */}

        <div className='section'>

            <Header ></Header>
            <div className="container-center">
                <div className="tile" >
                    <img className="product-detail-img" src={"https://res.cloudinary.com/moteam/image/upload/" + item.imageKey + ".png"} alt={item.productName}></img>
                    <div className="product-detail-description">
                        <div className="product-detail-name" >
                            {item.productName}
                        </div>
                        <div className="product-detail-price" >
                            {item.price}
                        </div>
                        <div style={{ borderBottom: "1px solid black", marginBottom: "2rem" }} > </div>
                        <div className="product-detail-info" >
                            {item.productInfo}
                        </div>
                        <div style={{ marginTop: "2rem" }} > </div>

                        <button className='purchase-button' style={{ display: "block" }} onClick={handleAddToCart} >Add to Cart</button>

                        <div style={{ marginTop: "2rem" }} > </div>
                        <button className='edit-button' style={{ display: "inline", marginRight: "1rem" }}>수정</button>
                        <button className='edit-button' style={{ display: "inline" }}>삭제</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default ProductDetail;
