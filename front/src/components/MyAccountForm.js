import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
}
    from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from 'react-bootstrap';
import * as Api from "../api";
// import Postcode from './Postcode'

function MyAccountForm() {
    const [disabled, setDisabled] = useState(true);
    const [user, setUser] = useState('');
    // const [userName, setUserName] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [address, setAddress] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');

    const [popup, setPopup] = useState(false);
    const toggleShow = (e) => {
        e.preventDefault();
        console.log('toggle clicked!');
        setPopup(!popup);
    }


    const init = async () => {
        const jwt = localStorage.getItem('token')
        await axios.get('http://localhost:5001/api/user', {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }).then(res => {
            console.log(res.data)
            setUser(res.data)
            // setUserName(res.data.userName)
            // setPassword(res.data.password)
            // setConfirmPassword(res.data.password)
            // setAddress(res.data.address)
            // setPhoneNumber(res.data.phoneNumber)
        }).catch(error => console.log(error))
    };

    useEffect(() => {
        init();
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log({ name, value });
        setUser({
            ...user,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        // const validated = validateForm(user);
        // if (typeof validated === "string") {
        //     alert(validated);
        //     return;
        // }
        // "users/유저id" 엔드포인트로 patch 요청함.
        const newData = await Api.patch(`users/${user._id}`, {
            ...user,
            "currentPassword": currentPassword,
        });
        console.log(newData);
        alert('수정이 완료되었습니다!')

    };



    const validateForm = ({ userName, password, confirmPassword }) => {
        console.log(userName, password, confirmPassword);

        if (userName.length < 2) {
            return "이름은 2글자 이상이어야합니다.";
        }
        if (password.length < 4) {
            return "비밀번호는 4글자 이상이어야합니다.";
        }
        if (password !== confirmPassword) {
            return "비밀번호가 일치하지 않습니다.";
        }
        return true;
    };


    return (
        <>
            <div className="container">
                <MDBContainer fluid>
                    <div className="edit-button">
                        <MDBBtn className="mb-1 size=sm" color='secondary' size="lg"
                            onClick={(e) => {
                                setDisabled((current) => !current)
                                console.log(disabled)
                            }}>수정하기</MDBBtn>
                    </div>
                    <Form >
                        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                            <MDBCol col='12'>

                                <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '60%' }}>
                                    <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                        <p className="mb-1">이름</p>
                                        <div className="user-input">
                                            <MDBInput wrapperClass='mb-4 w-100' label='' name="userName" type='text' size="lg"
                                                disabled={disabled} onChange={handleChange} value={user.userName} />
                                        </div>
                                        <p className="mb-1">비밀번호</p>
                                        <MDBInput wrapperClass='mb-4 w-100' label='' name="password" type='password' size="lg" disabled={disabled} onChange={handleChange} />
                                        <p className="mb-1">비밀번호 확인</p>
                                        <MDBInput wrapperClass='mb-4 w-100' label='' name='password' type='password' size="lg" disabled={disabled} onChange={handleChange} />
                                        <p className="mb-1">주소</p>
                                        <MDBInput wrapperClass='mb-4 w-100' label='' name='address' type='address' size="lg" disabled={disabled} onChange={handleChange} value={user.address} />
                                        <p className="mb-1">전화번호</p>
                                        <MDBInput wrapperClass='mb-4 w-100' label='' name='phoneNumber' type='tel' size="lg" disabled={disabled} onChange={handleChange} value={user.phoneNumber} />
                                        {!disabled &&
                                            <MDBBtn size='lg' type="submit" disabled={disabled} onClick={toggleShow}  >
                                                수정하기
                                            </MDBBtn>}
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </Form>
                </MDBContainer>

                <MDBModal show={popup} tabIndex='-1' >
                    <MDBModalDialog>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>현재 비밀번호를 입력하세요</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>
                                <MDBInput name='currentPassword' type='password' onChange={e => setCurrentPassword(e.target.value)} />
                            </MDBModalBody>

                            <MDBModalFooter>
                                <MDBBtn onClick={handleSubmit} size="lg">수정 완료하기</MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>

            </div >


        </>



    );

}


export default MyAccountForm;