import React from 'react';
import "./Admin.css"
import { Link } from 'react-router-dom';
import { ROUTE } from '../../utills/route'


import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBCardImage,
    MDBIcon

} from 'mdb-react-ui-kit';


function MyCard({ title, content, address, }) {
    return (
        <a href={address}>
            <MDBCard className='h-100'>
                <MDBCardBody>
                    <MDBIcon fas icon="user-cog" />
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardText>
                        {content}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </a>
    )
}



const Admin = () => {
    return (<section className="section">
        <div className="container">
            <h1>웹서비스 관리</h1>
        </div>
        <div className="container">
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                <MDBCol>
                    <Link to={ROUTE.ADMIN_ORDERS.link}>
                        <MyCard title='주문관리' content='모든 주문 내역을 확인 및 관리할 수 있습니다.'></MyCard></Link>
                </MDBCol>
                <MDBCol>
                    <Link to={ROUTE.ADMIN_USERS.link}><MyCard title='회원 관리' content='모든 회원 정보를 확인 및 관리 할 수 있습니다. '></MyCard></Link>
                </MDBCol>
                <MDBCol>
                    <Link to={ROUTE.CATEGORY_ADD.link}>
                        <MyCard title='카테고리 추가' content='제품이 속할 수 있는, 카테고리 정보를 추가할 수 있습니다.'></MyCard></Link>
                </MDBCol>
                <MDBCol>
                    <Link to={ROUTE.PRODUCT_ADD.link}>
                        <MyCard title='제품 추가' content='제품 정보를 추가할 수 있습니다.'></MyCard></Link>
                </MDBCol>
            </MDBRow>
        </div>
    </section>
    )
}


export default Admin;

