import "./navbar.css"
import React from 'react';





export default function Navbar() {

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
                        <li>
                            <a href="/account">계정관리</a>
                        </li>
                        <li>
                            <a href="/register">회원가입</a>
                        </li>
                        <li>
                            <a href="/login">로그인</a>
                        </li>
                        <li>
                            <a href="/cart">장바구니</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );


}