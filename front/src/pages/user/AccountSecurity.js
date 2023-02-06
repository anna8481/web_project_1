import React, { useState, useEffect } from "react";
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
    MDBInputGroup
}
    from 'mdb-react-ui-kit';
import * as Api from "../../utills/api";
import Postcode from '../../utills/Postcode'

function AccountSecurity() {
    const [disabled, setDisabled] = useState(true);
    const [formData, setFormData] = useState(
        {
            userName: "",
            address: {
                address1: "",
                address2: "",
                postalCode: ""
            },
            phoneNumber: "",
            _id: ""
        }
    );
    const [currentPassword, setCurrentPassword] = useState('');

    const [popup, setPopup] = useState(false);
    const toggleShow = (e) => {
        e.preventDefault();
        console.log('toggle clicked!');
        setPopup(!popup);
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await Api.get('user');
                setFormData({ ...res.data });
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, []);


    const handleInputChange = e => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormData(prev => (
            { ...prev, [name]: value }));
    };


    const handleAddressChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            address: {
                ...prev.address,
                [name]: value
            }
        }))
    }

    const [postPopup, setPostPopup] = useState(false);
    const handleComplete = (e) => {
        e.preventDefault();
        setPostPopup(!postPopup);
    }



    const handleSubmit = async (e) => {
        e.preventDefault();

        // "users/유저id" 엔드포인트로 patch 요청함.
        const updatedUser = {
            username: formData.userName,
            phoneNumber: formData.phoneNumber || "",
            address: {
                address1: formData.address1 || "",
                address2: formData.address2 || "",
                postalCode: formData.postalCode || ""
            },
            currentPassword: currentPassword,

        };
        const newData = await Api.patch(`users/${formData._id}`, updatedUser);
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
            <div className="container-center">
                <div className='section'>
                    <div className="edit-button">
                        <button className="user-button"
                            onClick={(e) => {
                                setDisabled((current) => !current)
                                console.log(disabled)
                            }}>수정하기</button>
                    </div>
                    <form className="account-form" >
                        <div>
                            <label>이름</label>
                        </div>

                        <input className="input" label='' name="userName" type='text'
                            disabled={disabled} onChange={handleInputChange} value={formData.userName} />
                        <div>
                            <label>비밀번호</label>
                        </div>
                        <input className="input" label='' name="password" type='text' disabled />
                        <div>
                            <label>비밀번호 확인</label>
                        </div>
                        <input className="input" label='' name='password' type='text' disabled />
                        <div>
                            <label>주소</label>
                        </div>
                        <div className="postcode">
                            <input className='input' label="우편번호" name='postalCode' type='text' size="lg" disabled={disabled} onChange={handleAddressChange} value={formData.address?.postalCode} />
                            <button className='postcode-button' onClick={handleComplete} disabled={disabled}  >우편번호 찾기</button>
                        </div>
                        {postPopup && <Postcode setFormData={setFormData} formData={formData} ></Postcode>}

                        <input className="input" label='주소' name='address1' type='text' size="lg" disabled={disabled} onChange={handleAddressChange} value={formData.address?.address1} />

                        <input className="input" label='상세주소' name='address2' type='text' size="lg" disabled={disabled} onChange={handleAddressChange}
                            value={formData.address?.address2}
                        />

                        <div>
                            <label>주소</label>
                        </div>
                        <input className="input" label='' name='phoneNumber' type='tel' size="lg" disabled={disabled} onChange={handleInputChange} value={formData.phoneNumber} />
                        {!disabled &&
                            <button className="user-button" type="submit" disabled={disabled} onClick={toggleShow}  >
                                수정하기
                            </button>}
                    </form>

                </div>

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




export default AccountSecurity;
