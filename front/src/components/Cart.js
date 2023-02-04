import React from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './Cart.css';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCheckbox,
    MDBIcon,
}
    from 'mdb-react-ui-kit';



function CardProductContainer({ imageKey, productName, price }) {
    return <>
        <div className="cart-product-container">
            <div>
                <div className="cart-product-checkbox">
                    <MDBCheckbox name='flexCheck' value='' id='productChecked' label='' defaultChecked />
                    <MDBIcon far icon="trash-alt" />
                </div>
                <div className="cart-product-info">
                    <img className="productImg" src={imageKey} />
                    <div className="content">
                        <div className="info">   <p>{productName}</p> </div>
                        <div className="cart-quantity">
                            <MDBIcon fas icon="minus-circle" />
                            <div className="cart-quantity-no">1</div>
                            <MDBIcon fas icon="plus-circle" />
                        </div>
                    </div>
                    <div className="calculator">
                        <p className="unitPrice">{price}</p>
                        <MDBIcon fas icon="times" />
                        <p className="quantity">1</p>
                        <MDBIcon fas icon="equals" />
                        <p className="productPrice">{price}</p> </div>
                </div>
            </div>
        </div>
    </>
}


function Cart() {

    return (
        <div className="container">
            <MDBBreadcrumb className="cart" >
                <MDBBreadcrumbItem>
                    <a href='/cart'>장바구니</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                    <a href="/order">주문결제</a>
                </MDBBreadcrumbItem >
                <MDBBreadcrumbItem active>주문완료</MDBBreadcrumbItem>
            </MDBBreadcrumb >
            <div className="tile-ancestor">
                <div className="product-tile ">
                    <div className="cart-product-header">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='전체선택' defaultChecked />
                        <label className="seperator">
                            <p>|</p>
                        </label>
                        <label className="delete-part">
                            <p>선택삭제</p>
                        </label>
                    </div>
                    <CardProductContainer imageKey={"https://media.istockphoto.com/id/1303307183/photo/stack-of-various-denim-jeans-trousers-on-stone-wooden-rustic-background-fashion-design.jpg?b=1&s=170667a&w=0&k=20&c=OplzswTue8JmnZNQ6CAxdUps7QT3wFXGb62GLT5yRk4="} productName={"여성청바지"} price={"29000"}></CardProductContainer>
                </div>
                <div className="order-tile">
                    <div className="order-summary " >
                        <div className="order-header"><h3>결제정보</h3></div>
                        <div className="order-info" >
                            <div className="info">   <p>상품수</p> <p id="productsCount">1개</p></div>
                            <div className="info">   <p>상품금액</p> <p id="productPrice">29,000원</p></div>
                            <div className="info">   <p>상품 총 금액</p> <p id="productsTotal">29,000원</p></div>
                            <div className="info"><p>배송비</p> <p id="deliveryFee">3,000원</p> </div>
                        </div>
                        <div className="total" ><h2>총 결제금액</h2> <h2 id="Total">32,000원</h2> </div>

                        <Link to="/order" >
                            <div className="d-grid gap-2" >
                                <MDBBtn size="lg" >구매하기</MDBBtn>
                            </div></Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart;