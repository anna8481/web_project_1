import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import './Order.css';
import Postcode from '../../utills/Postcode'
import * as Api from "../../utills/api";
import Header from '../../components/Header'

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


    const handleInputChange = e => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormData(prev => (
            { ...prev, [name]: value }));
    };


    const handleAddressChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            address: {
                ...prev.address,
                [name]: value
            }
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        // "users/유저id" 엔드포인트로 patch 요청함.
        const updatedUser = {
            username: formData.userName,
            phoneNumber: formData.phoneNumber || "",
            address: {
                address1: formData.address.address1 || "",
                address2: formData.address.address2 || "",
                postalCode: formData.postalCode || ""
            },
            // currentPassword: currentPassword,

        };
        console.log(updatedUser);
        alert('수정이 완료되었습니다!')

    };


    return (
        <>


            <div className='section'>
                <Header title='Order Summary'></Header>
                <div className="container-center">
                    <div className="tile">
                        <div className='delivery-tile'>
                            <div className="delivery-info">
                                <p>Order info</p>
                                <div>
                                    <label>이름</label>
                                </div>
                                <div>
                                    <input className="input" type="text" name="userName" value={formData.userName} onChange={handleInputChange} />
                                </div>
                                <div>
                                    <label>연락처</label>
                                </div>
                                <div>
                                    <input className="input" type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>

                        <div className='delivery-tile'>
                            <div className="delivery-info">
                                <p>Shipping</p>
                                <div>
                                    <label>이름</label>
                                </div>
                                <div>
                                    <input className="input" type="text" placeholder='받는 분 이름을 입력해 주세요.' name="userName" value={formData.userName} onChange={handleInputChange} />
                                </div>
                                <div>
                                    <label>연락처</label>
                                </div>
                                <div>
                                    <input className="input" type="text" placeholder='-없이 입력해 주세요.' name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
                                </div>
                                <div>
                                    <label>주소</label>
                                </div>
                                <div>
                                    {postPopup && <Postcode setFormData={setFormData} formData={formData} ></Postcode>}
                                    <div className="postcode">
                                        <input className="input" type="text" placeholder='주소찾기를 클릭해주세요.' onChange={handleAddressChange} value={formData.address?.postalCode} />
                                        <div type="button" className="input" onClick={handleComplete}> 주소찾기</div>
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
                    </div></div>
                <div className="container-center">
                    <div className="tile">
                        <div className="order-summary " >
                            <div className="order-header"><p>결제정보</p></div>
                            <div className="order-info" >
                                <div className="info">   <p>상품 총 금액</p> <p id="productsTotal">29,000원</p></div>
                                <div className="info"><p>배송비</p> <p id="deliveryFee">3,000원</p> </div>
                            </div>
                            <div className="total" ><h2>총 결제금액</h2> <h2 id="Total">32,000원</h2> </div>

                            <Link to="/order" >
                                <div className="purchase" >
                                    <button className="purchase-button" >구매하기</button>
                                </div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order;