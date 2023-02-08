import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';
import Header from '../../components/Header'
import { MDBIcon, } from 'mdb-react-ui-kit';
import { ROUTE } from '../../utills/route'

function CardProductContainer({ img, productName, price, handleDelete }) {
    const currencySymbol = 'KRW';
    return <>

        <div className="cart-product-container">
            <div className="cart-product-info">
                <div className="cart-img-name">
                    <img className="productImg" src={img} alt={productName} />
                    <div className="product-name">   {productName} </div>
                </div>
                <div className="cart-quantity">
                    <MDBIcon fas icon="minus-circle" />
                    <div className="cart-quantity-no">1</div>
                    <MDBIcon fas icon="plus-circle" />
                </div>
                <div className="product-price">{price.toLocaleString('en-US', { style: 'currency', currency: currencySymbol })} </div>
                <span className="delete-button">
                    <MDBIcon fas icon="times" onClick={handleDelete} /></span>
            </div>
        </div>
    </>
}


function Cart() {
    const currencySymbol = 'KRW';
    const shippingCost = 3000;
    const navigate = useNavigate();
    const [subtotal, setSubtotal] = useState(0);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);



    const handleRemoveFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };


    const handleOrder = () => {
        localStorage.getItem("token") ? navigate('/order') : navigate('/login')
    }

    useEffect(() => {
        const sum = cart.reduce((accum, curr) => accum + curr.price, 0)
        setSubtotal(sum);
    }, [subtotal])

    //cart.length === 0
    //? <p>"장바구니가 비어있습니다."  </p>
    return (<>
        <div className="section"  >
            <Header title="Cart" style={{ marginBottom: "0" }}></Header>
        </div >

        {/*
1. {Array.isArray(cart)  cart 가 undefined가 아니고
2.  장바구니.leng !==0 일때 렌더
3. 장바구니.leng ===0 일때는 이거
*/ }

        <div className="section" style={{ marginTop: "0" }}>
            <div className="product-tile ">
                {cart.length !== 0 ?
                    cart.map(item =>
                        (<CardProductContainer key={item._id} img={"https://res.cloudinary.com/moteam/image/upload/" + item.imageKey + ".png"} productName={item.productName} price={item.price} handleDelete={handleRemoveFromCart}></CardProductContainer>)
                    ) : <p>장바구니가 비어있습니다.</p>}
            </div>
            {/* {Array.isArray(cart) && */}
            {cart.length !== 0 &&
                <div className="payment-tile">
                    <div className="payment-summary " >
                        <div className="payment-header"><h3>결제정보</h3></div>
                        <div className="payment-info" >
                            <div className="info">   <p>상품 총 금액</p> <p id="productsTotal">{subtotal.toLocaleString('en-US', { style: 'currency', currency: currencySymbol })}</p></div>
                            <div className="info"><p>배송비</p> <p id="deliveryFee">{shippingCost.toLocaleString('en-US', { style: 'currency', currency: currencySymbol })}</p> </div>
                        </div>
                        <div className="payment-total" ><h2>총 결제금액</h2> <h2 id="Total">{(subtotal + shippingCost).toLocaleString('en-US', { style: 'currency', currency: currencySymbol })}</h2> </div>


                        <div className="purchase" >
                            <button className="purchase-button" onClick={handleOrder}>구매하기</button>
                        </div>
                        <p style={{ textAlign: 'center', marginTop: "1rem", textDecoration: "underline", display: "inline" }}>
                            <Link to={ROUTE.HOME.link}>Back home
                            </Link> </p>
                    </div>
                </div>}
        </div>
    </>
    )
}

export default Cart;