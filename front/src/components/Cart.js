import React from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
    return (
        <>
            <MDBBreadcrumb>
                <MDBBreadcrumbItem>
                <a href='/cart'>장바구니</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                <a href="/order">주문결제</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>주문완료</MDBBreadcrumbItem>
            </MDBBreadcrumb>
            <div>
                <label className="checkbox">
                    <input type="checkbox"/>
                    <p>전체선택</p>
                </label>
                <label className="seperator">
                    <p>|</p>
                </label>
                <label className="delete-part">
                    <p>선택삭제</p>
                </label>

            </div>
            <div>
                <div>
                    <h3>결제정보</h3>
                </div>
                <div>
                    <p>상품수</p>
                    <p>상품금액</p>
                    <p>배송비</p>
                </div>
                <div>
                    <h2>총 결제금액</h2>
                </div>
                <Link to="/order" >
                    <button>구매하기</button>
                </Link>
            </div>


        </>
    )
}

export default Cart;