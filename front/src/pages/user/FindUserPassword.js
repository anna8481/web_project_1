import * as Api from "../../utills/api";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { ROUTE } from '../../utills/route';

function FindUserPassword () {

    // const lostpass = async (e) => {
    //     e.preventDefault();
    //     const navigate = useNavigate();
    //     const userEmail = inputs;

    //     try {
    //         const response = await Api.post("users/help/password", {
    //             userEmail
    //         });
    //         localStorage.setItem('email', response.data.email);

    //         if (response.data.email === userEmail) {
    //             "메일로 임시비밀번호 보내기";
    //         }
    //         else {
    //             navigate(ROUTE.LOGIN.link);
    //         }

    //         console.log(response)
    //     } catch (err) {
    //         alert("가입되지 않은 이메일입니다.")
    //     }
    // };

    return(
        <div>
            <form onSubmit={""} className="user-form">
                <h4>비밀번호 찾기</h4>
                <p>임시 비밀번호 발급</p>
                <p>이메일 <input className="email"/></p>
                <button>전송</button>
                <p>이메일에 전송된 비밀번호를 확인 후 다시 로그인 해 주세요.</p>
                <button>
                    <Link to={ROUTE.LOGIN.link}>로그인할게요</Link>
                </button>
            </form>

        </div>
    )
}

export default FindUserPassword;