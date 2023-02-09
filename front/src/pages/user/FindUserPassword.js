import * as Api from "../../utills/api";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { ROUTE } from '../../utills/route';


function FindUserPassword() {

    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");

    const handleChange = event => {
        setUserEmail(() =>
            event.target.value
        )
    }

    const lostpass = async (e) => {
        e.preventDefault();

        const formdata = {
            userEmail
        }
        console.log(formdata)
        try {
            const response = await Api.post("users/help/password", formdata)
                ;
            alert("가입하신 이메일로 임시 비밀번호를 전송했습니다.")
            navigate('/login');
        } catch (err) {
            alert("가입된 정보가 없습니다.");
        }
    };

    return (
        <div>
            <form onSubmit={lostpass} className="user-form">
                <h4>비밀번호 찾기</h4>
                <p>임시 비밀번호 발급</p>
                <p>이메일 <input className="email" onChange={handleChange} value={userEmail} /></p>
                <button type="submit">전송</button>
                <p>이메일에 전송된 비밀번호를 확인 후 다시 로그인 해 주세요.</p>

            </form>
        </div>
    )
}

export default FindUserPassword;