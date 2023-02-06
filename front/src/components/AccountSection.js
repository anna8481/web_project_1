import React from 'react';
import "./AccountSection.css"
import { ROUTE } from '../route'
import {
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';


import MyCard from './MyCard';


const AccountSection = () => {
    return (<section className="section">
        <div className="container">
            <h1>계정관리</h1>
        </div>
        <div className="container">
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                <MDBCol>
                    <MyCard to={ROUTE.ACCOUNT_ORDERS.link} title='주문조회' content='지난 주문을 확인할 수 있습니다.'></MyCard>
                </MDBCol>
                <MDBCol>
                    <MyCard to={ROUTE.MYACCOUNT.link} title='회원정보 관리' content='회원 정보를 확인, 수정할 수 있습니다. '></MyCard>
                </MDBCol>
                <MDBCol>

                    <MyCard to={ROUTE.PRODUCT_ADD.link} title='제품 판매' content='제품 정보를 등록하여, 판매할 수 있습니다. '></MyCard>
                </MDBCol>
                <MDBCol>
                    <MyCard to={ROUTE.ACCOUNT_SIGNOUT.link} title='회원 탈퇴' content='모든 정보를 안전하게 삭제한 후 탈퇴할 수 있습니다.'></MyCard>
                </MDBCol>
            </MDBRow>
        </div>
    </section >
    )
}


export default AccountSection;

