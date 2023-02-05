import React, { useState, useEffect } from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import './Order.css';
import Postcode from './Postcode'
import * as Api from "../api";
import {
    MDBBtn,
    // MDBContainer,
    // MDBCard,
    // MDBCheckbox,
    // MDBIcon,
}
    from 'mdb-react-ui-kit';

function Order() {
    const [postPopup, setPostPopup] = useState(false);
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

    const handleComplete = (e) => {
        e.preventDefault();
        setPostPopup(!postPopup);
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


    const handleAddressChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            address: {
                ...formData.address,
                [name]: value
            }
        })
    }


    return (
        <>
            <div className="container">
                <MDBBreadcrumb>
                    <MDBBreadcrumbItem>
                        <a href='/cart'>장바구니</a>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem>
                        <a href="/order">주문결제</a>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active>주문완료</MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <div className="tile">
                    <div className='delivery-tile'>
                        <div className="delivery-info">
                            <h3>배송지 정보</h3>
                            <div>
                                <label>이름</label>
                            </div>
                            <div>
                                <input className="input" type="text" placeholder='받는 분 이름을 입력해 주세요.' name="userName" value={formData.userName} />
                            </div>
                            <div>
                                <label>연락처</label>
                            </div>
                            <div>
                                <input className="input" type="text" placeholder='-없이 입력해 주세요.' name="phoneNumber" value={formData.phoneNumber} />
                            </div>
                            <div>
                                <label>주소</label>
                            </div>
                            <div>
                                {postPopup && <Postcode setFormData={setFormData} formData={formData} ></Postcode>}
                                <div className="postcode">
                                    <div className="postcode-input"><input className="input" type="text" placeholder='주소찾기를 클릭해주세요.' onChange={handleAddressChange} value={formData.address.postalCode} /></div>
                                    <div className="postcode-button" ><div type="button" className="input" onClick={handleComplete}  >주소찾기</div></div>
                                </div>
                                <input className="input" type="text" placeholder='주소' value={formData.address.address1} onChange={handleAddressChange} /><br />
                                <input className="input" type="text" placeholder='상세주소를 입력해주세요.' onChange={handleAddressChange} value={formData.address.address2} />
                            </div>
                            <div>
                                <label>요청사항</label>
                            </div>
                            <div>
                                <select id="requestSelectBos">
                                    <option value="0">
                                        배송시 요청사항을 선택해 주세요.
                                    </option>
                                    <option value="1" className="select-option">
                                        직접 수령하겠습니다.
                                    </option>
                                    <option value="2" className="select-option">
                                        배송 전 연락바랍니다.
                                    </option>
                                    <option value="3" className="select-option">
                                        부재 시 경비실에 맡겨주세요.
                                    </option>
                                    <option value="4" className="select-option">
                                        부재 시 문 앞에 놓아주세요.
                                    </option>
                                    <option value="5" className="select-option">
                                        부재 시 택배함에 넣어주세요.
                                    </option>
                                    <option value="6" className="select-option">
                                        직접 입력
                                    </option>
                                </select>
                            </div>
                            <div>
                                <input
                                    className="input"
                                    id="customRequest"
                                    type="text"
                                    maxLength="50"
                                    placeholder="최대 50자 입력이 가능합니다."
                                    autoComplete='on' />
                            </div>
                        </div>
                    </div>
                    <div className='order-tile'>
                        <div>
                            <div className="order-summary">
                                <h3>결제정보</h3>

                                <div>
                                    <p>주문상품</p>
                                    <p>상품총액</p>
                                    <p>배송비</p>
                                </div>
                                <div>
                                    <h2>총 결제금액</h2>
                                </div>
                                <MDBBtn>결제하기</MDBBtn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order;