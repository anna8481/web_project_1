import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import DaumPostcode from 'react-daum-postcode';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBSwitch,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';

function MyAccountForm() {

    const user = {
        "userId": 0,
        "userName": "유재석",
        "email": "test@test.com",
        "address": "서울시 성동구",
        "phoneNumber": "010-1111-1111",
        "password": "12341234"
    };


    const [users, setUsers] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [userName, setUserName] = useState(user.userName);
    const [password, setPassword] = useState(user.password);
    const [confirmPassword, setConfirmPassword] = useState(user.password);
    const [address, setAddress] = useState(user.address);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

    const init = async () => {
        // const users = await axios('http://localhost:9999/users')
        // const foundUser = users.data[0]  //현재 id로 db 찾기
        //console.log(users.data[0])
        // const foundUser = users.filter(item => item.id == 0)
        // console.log(foundUser)
    };
    useEffect(() => {
        init();
    }, []);


    function handleSubmit(e) {
        e.preventDefault();
        alert(`userName: ${userName}, password: ${password}, confirmPassword: ${confirmPassword}, address: ${address}, phoneNumber : ${phoneNumber}`)
    }

    return (
        <>
            <div className="container">
                <MDBContainer fluid>
                    <div className="edit-button">
                        <MDBBtn className="mb-1 size=sm" onClick={(e) => {
                            setDisabled((current) => !current)
                            console.log(disabled)
                        }}>수정하기</MDBBtn>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                            <MDBCol col='12'>

                                <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '60%' }}>
                                    <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                        <p className="mb-1">이름</p>
                                        <div className="user-input">
                                            <MDBInput wrapperClass='mb-4 w-100' label='' id='formUserName' type='text' size="lg"
                                                disabled={disabled} onChange={e => setUserName(e.target.value)} value={userName} />
                                        </div>
                                        <p className="mb-1">비밀번호</p>
                                        <MDBInput wrapperClass='mb-4 w-100' label='' id='formUserPassword' type='password' size="lg" disabled={disabled} onChange={e => setPassword(e.target.value)} value={password} />
                                        <p className="mb-1">비밀번호 확인</p>
                                        <MDBInput wrapperClass='mb-4 w-100' label='' id='formUserConfirmPassword' type='password' size="lg" disabled={disabled} onChange={e => setConfirmPassword(e.target.value)} value={password} />
                                        <p className="mb-1">주소</p>
                                        <MDBInput wrapperClass='mb-4 w-100' label='' id='formUserAddress' type='address' size="lg" disabled={disabled} onChange={e => setAddress(e.target.value)} value={address} />
                                        <p className="mb-1">전화번호</p>
                                        <MDBInput wrapperClass='mb-4 w-100' label='' id='formUserPhoneNumber' type='address' size="lg" disabled={disabled} onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} />
                                        <MDBBtn size='lg' type="submit">
                                            저장하기
                                        </MDBBtn>

                                    </MDBCardBody>
                                </MDBCard>

                            </MDBCol>
                        </MDBRow>
                    </Form>
                </MDBContainer>
            </div >
        </>
    );

}


export default MyAccountForm;