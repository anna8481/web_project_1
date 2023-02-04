import "./navbar.css"
import React from 'react';
import { useNavigate } from 'react-router-dom'




export default function Navbar() {
    const navigate = useNavigate();
    const logout = (e) => {
        //저장했던 JWT 토큰을 삭제함.
        localStorage.removeItem("token");
        console.log(localStorage)

        navigate("/");
    };



    return (
        <div className="container">
            <nav className="navigation">
                <div className="navigation-brand">
                    <a href="/" >
                        <img src="images/elice-rabbit.png" alt="Elice logo" width="30" height="30" /></a>
                    <a href="/" className="brand-name" >
                        Shopping Mall
                    </a>
                </div>
                <div
                    className="navigation-menu">
                    <ul>
                        {localStorage.getItem("token") &&
                            <li>
                                <a href="/account">계정관리</a>
                            </li>}
                        {localStorage.getItem("token") ?
                            <li>
                                <a onClick={logout}  >로그아웃</a>
                            </li> :
                            <>
                                <li>
                                    <a href="/register" >회원가입</a>
                                </li>
                                <li>
                                    <a href="/login">로그인</a>
                                </li>
                            </>
                        }

                        <li>
                            <a href="/cart">장바구니</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );


}