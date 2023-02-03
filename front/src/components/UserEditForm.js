import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import * as Api from "../api";
import DaumPostcode from 'react-daum-postcode';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
}
    from 'mdb-react-ui-kit';

function UserEditForm({ user, setUser }) {
    console.log(user);
    // console.log(user._id);
    const [disabled, setDisabled] = useState(false);
    const [userName, setUserName] = useState(user.userName);
    const [password, setPassword] = useState(user.password);
    const [confirmPassword, setConfirmPassword] = useState(user.password);
    const [address, setAddress] = useState(user.address);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // "users/유저id" 엔드포인트로 PUT 요청함.
        const res =
            await Api.patch(`users/:${user._id}`, {
                userName,
                password,
                address,
                phoneNumber
            });

        // // 유저 정보는 response의 data임.
        const updatedUser = res.data;
        // // 해당 유저 정보로 user을 세팅함.
        // setUser(updatedUser);
    };
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
                                        <MDBInput wrapperClass='mb-4 w-100' label='' id='formUserAddress1' type='address' size="lg" disabled={disabled} onChange={e => setAddress(e.target.value)} value={address} />
                                        <p className="mb-1">전화번호</p>
                                        <MDBInput wrapperClass='mb-4 w-100' label='' id='formUserPhoneNumber' type='address' size="lg" disabled={disabled} onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} />
                                        {!disabled &&
                                            <MDBBtn size='lg' type="submit" disabled={disabled}  >
                                                수정하기
                                            </MDBBtn>}

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


export default UserEditForm;