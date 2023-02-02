import React from 'react';
import "./AccountSection.css"


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




const AccountSection = () => {

    return (<section className="section">


        <div className="container">
            <h1>계정관리</h1>
        </div>
        <div className="container">
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                <MDBCol>
                    <a className="accountCard" href="/account/orders">
                        <MyCard title='주문조회' content='지난 주문을 확인할 수 있습니다.'></MyCard></a>
                </MDBCol>
                <MDBCol>
                    <a className="accountCard" href="/account/security"><MyCard title='회원정보 관리' content='회원 정보를 확인, 수정할 수 있습니다. '></MyCard></a>
                </MDBCol>
                <MDBCol>
                    <a className="accountCard" href="/product/add">
                        <MyCard title='제품 판매' content='제품 정보를 등록하여, 판매할 수 있습니다. '></MyCard></a>
                </MDBCol>
                <MDBCol>
                    <a className="accountCard" href="/account/signout">
                        <MyCard title='회원 탈퇴' content='모든 정보를 안전하게 삭제한 후 탈퇴할 수 있습니다.'></MyCard></a>
                </MDBCol>
            </MDBRow>
        </div>
    </section>
    )
}


export default AccountSection;

