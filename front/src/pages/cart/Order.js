import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Order.css';
import Postcode from '../../utills/Postcode'
import * as Api from "../../utills/api";
import Header from '../../components/Header'

function Order() {
    const navigate = useNavigate();
    const [postPopup, setPostPopup] = useState(false);
    const cart = JSON.parse(localStorage.getItem('cart'));
    const subTotal = cart.reduce((accum, curr) => accum + curr.price, 0);
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
    const [shippingInfo, setShippingInfo] = useState({});
    const [useUserInfo, setUseUserInfo] = useState(false);



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

    const handleComplete = (e) => {
        e.preventDefault();
        setPostPopup(!postPopup);
    }



    const handleInputChange = e => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setShippingInfo(prev => (
            { ...prev, [name]: value }));
    };


    const handleAddressChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setShippingInfo(prev => ({
            ...prev,
            address: {
                ...prev.address,
                [name]: value
            }
        }))
    }

    const handleCheckboxChange = event => {
        setUseUserInfo(event.target.checked);
        if (event.target.checked) {
            setShippingInfo({ ...formData });
        } else {
            setShippingInfo({});
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        // "order" 엔드포인트로 post 요청함.

        const order = {
            userId: shippingInfo._id,
            productId: cart[0]._id || "",
            totalPrice: subTotal + 3000,
            address: {
                address1: shippingInfo.address.address1 || "",
                address2: shippingInfo.address.address2 || "",
                postalCode: shippingInfo.address.postalCode || "",
                receiverName: shippingInfo.userName || "",
                receiverPhoneNumber: shippingInfo.phoneNumber || "",
            },
        };

        try {
            const response = await Api.post("order", {
                order,
            });

            navigate('/order/complete');

        } catch (err) {
            alert("배송 정보를 모두 입력해 주세요.")
        }
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
                                <div style={{ display: "flex" }}>
                                    <p >Shipping</p>
                                    <input type="checkbox" style={{ width: "15px", height: "15px", marginLeft: "1rem", marginTop: "3px" }} checked={useUserInfo} onChange={handleCheckboxChange}></input>
                                    <div>주문자 정보와 동일</div>
                                </div>
                                <div>
                                    <label>이름</label>
                                </div>
                                <div>
                                    <input className="input" type="text" placeholder='받는 분 이름을 입력해 주세요.' name="userName" value={shippingInfo.userName} onChange={handleInputChange} disabled={useUserInfo} />
                                </div>
                                <div>
                                    <label>연락처</label>
                                </div>
                                <div>
                                    <input className="input" type="text" placeholder='-없이 입력해 주세요.' name="phoneNumber" value={shippingInfo.phoneNumber} onChange={handleInputChange} disabled={useUserInfo} />
                                </div>
                                <div>
                                    <label>주소</label>
                                </div>
                                <div>
                                    {postPopup && <Postcode setFormData={setShippingInfo} formData={shippingInfo} ></Postcode>}
                                    <div className="postcode">
                                        <input className="postcode-input" type="text" placeholder='주소찾기를 클릭해주세요.' onChange={handleAddressChange} value={shippingInfo.address?.postalCode} disabled={useUserInfo} />
                                        <div type="button" className="postcode-button" onClick={handleComplete}> 주소찾기</div>
                                    </div>
                                    <input className="input" type="text" placeholder='주소' value={shippingInfo.address?.address1} onChange={handleAddressChange} disabled={useUserInfo} /><br />
                                    <input className="input" type="text" placeholder='상세주소를 입력해주세요.' onChange={handleAddressChange} value={shippingInfo.address?.address2} disabled={useUserInfo} />
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
                                <div className="info">   <p>상품 총 금액</p> <p id="productsTotal">{subTotal}</p></div>
                                <div className="info"><p>배송비</p> <p id="deliveryFee">3000</p> </div>
                            </div>
                            <div className="order-total" ><h2>총 결제금액</h2> <h2>{subTotal + 3000}</h2> </div>


                            <div className="purchase" >
                                <button className="purchase-button" onClick={handleSubmit} >구매하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order;