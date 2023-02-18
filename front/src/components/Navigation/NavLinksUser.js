import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../utills/route";
import "./NavLinksUser.css";

const NavLinksUser = (props) => {
  const navigate = useNavigate();
  const logout = (e) => {
    //저장했던 JWT 토큰을 삭제함.
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <ul className="nav-links-user">
      {localStorage.getItem("isAdmin") && (
        <li>
          <Link to={ROUTE.ADMIN.link}>관리자</Link>
        </li>
      )}
      {localStorage.getItem("token") && (
        <li>
          <Link to={ROUTE.ACCOUNT.link}>마이페이지</Link>
        </li>
      )}
      {localStorage.getItem("token") ? (
        <li>
          <div className="logout" onClick={logout}>
            로그아웃
          </div>
        </li>
      ) : (
        <>
          <li>
            <Link to={ROUTE.REGISTER.link}>회원가입</Link>
          </li>
          <li>
            <Link to={ROUTE.LOGIN.link}>로그인</Link>
          </li>
        </>
      )}
      <li className="nav-links-user-cart">
        <Link to={ROUTE.CART.link}>장바구니</Link>
      </li>
    </ul>
  );
};

export default NavLinksUser;
