import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import Header from '../../components/Header'
import { MDBIcon, } from 'mdb-react-ui-kit';



function CardProductContainer({ imageKey, productName, price }) {
    return <>

        <div className="cart-product-container">
            <div>
                <div className="cart-product-info">
                    <div className="cart-img-name">
                        <img className="productImg" src={imageKey} />
                        {/* <div className="content"> */}
                        <div className="product-name">   <p>{productName}</p> </div>
                    </div>
                    <div className="cart-quantity">
                        <MDBIcon fas icon="minus-circle" />
                        <div className="cart-quantity-no">1</div>
                        <MDBIcon fas icon="plus-circle" />
                    </div>
                    {/* </div> */}
                    <div className="calculator">
                        <p className="productPrice">{price}</p> </div>
                    <MDBIcon fas icon="times" />
                </div>
            </div>
        </div>
    </>
}


function Cart() {

    const cart = localStorage.cart;
    console.log("cart", cart);

    return (
        <div className="section">
            <Header title="Cart"></Header>
            <div className="container">
                <div className="product-tile ">

                    {/* 
                {Array.isArray(products) && products.map(item => (
                    <Product
                        key={item._id}
                        itemId={item._id}
                        title={item.productName}
                        price={item.price}
                        img={"https://res.cloudinary.com/moteam/image/upload/" + item.imageKey + ".png"}
                        productInfo={item.productInfo}>
                    </Product>))} */}
                    {/* {cart.map(item =>
                        (<CardProductContainer imageKey={"https://www.urbanic30.com/shopimages/urbanic30/0120010000712.jpg?1669683424ç"} productName={"Blue Jeans"} price={"29000"}></CardProductContainer>)
                    )} */}


                </div>
                <div className="order-tile">
                    <div className="order-summary " >
                        <div className="order-header"><h3>결제정보</h3></div>
                        <div className="order-info" >
                            <div className="info">   <p>상품 총 금액</p> <p id="productsTotal">29,000원</p></div>
                            <div className="info"><p>배송비</p> <p id="deliveryFee">3,000원</p> </div>
                        </div>
                        <div className="total" ><h2>총 결제금액</h2> <h2 id="Total">32,000원</h2> </div>

                        <Link to="/order" >
                            <div className="purchase" >
                                <button className="purchase-button" >구매하기</button>
                            </div></Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart;