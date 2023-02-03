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
                    <div className="cart-product-container">
                        <div>
                            <div className="cart-product-checkbox">
                                <MDBCheckbox name='flexCheck' value='' id='productChecked' label='' defaultChecked />
                                {/* <img className="productImg" src='https://media.istockphoto.com/id/1303307183/photo/stack-of-various-denim-jeans-trousers-on-stone-wooden-rustic-background-fashion-design.jpg?b=1&s=170667a&w=0&k=20&c=OplzswTue8JmnZNQ6CAxdUps7QT3wFXGb62GLT5yRk4='> </img> */}
                                <MDBIcon far icon="trash-alt" />
                            </div>
                            <div className="cart-product-info">
                                <div className="content">
                                    <div className="info">   <p>여성 청바지</p> </div>
                                    <div className="cart-quantity">
                                        <MDBIcon fas icon="minus-circle" />
                                        <div className="cart-quantity-no">1</div>
                                        <MDBIcon fas icon="plus-circle" />
                                    </div>
                                </div>
                                <div className="calculator">
                                    <p className="unitPrice">29000</p>
                                    <p className="quantity">x 1</p>
                                    <p className="productPrice">29000</p> </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="order-tile">
                    <div className="order-summary d-inline-flex p-2" >
                        <div className="order-header"><h3>결제정보</h3></div>
                        <div>
                            <div className="info">   <p>상품수</p> <p id="productsCount">2개</p></div>
                            <div className="info">   <p>상품금액</p> <p id="productPrice">29000원</p></div>
                            <div className="info">   <p>상품 총 금액</p> <p id="productsTotal">58000원</p></div>
                            <div className="info"><p>배송비</p> <p id="deliveryFee">3000원</p> </div>
                        </div>
                        <div className="info" ><h2>총 결제금액</h2> <p id="Total">61000원</p> </div>
                        <Link to="/order" >
                            <div class="purchase"><MDBBtn>구매하기</MDBBtn></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart;