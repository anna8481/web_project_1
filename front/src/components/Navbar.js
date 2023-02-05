import "./navbar.css"
import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { ROUTE } from '../route'



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
                    <Link to={ROUTE.HOME.link} >
                        <div className="brand-name" >Moteam</div></Link>

                </div>
                <div
                    className="navigation-menu">
                    <ul>
                        {localStorage.getItem("token") &&
                            <li>
                                <Link to={ROUTE.ACCOUNT.link} >계정관리</Link>
                            </li>}
                        {localStorage.getItem("token") ?
                            <li>
                                <div className="logout" onClick={logout}  >로그아웃</div>
                                {/* <Link onClick={logout} >로그아웃</Link> */}
                            </li> :
                            <>
                                <li>
                                    <Link to={ROUTE.REGISTER.link} >회원가입</Link>
                                </li>
                                <li>
                                    <Link to={ROUTE.LOGIN.link} >로그인</Link>
                                </li>
                            </>
                        }
                        <li>
                            <Link to={ROUTE.CART.link} >장바구니</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );


}