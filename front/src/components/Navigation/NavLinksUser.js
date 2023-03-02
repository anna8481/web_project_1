import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../utills/route";
import "./NavLinksUser.css";
import { AuthContext } from "../../utills/AuthContext";

const NavLinksUser = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links-user">
      {auth.isAdmin && (
        <li>
          <Link to={ROUTE.ADMIN.link}>관리자</Link>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <Link to={ROUTE.ACCOUNT.link} onClick={props.onClickNav}>
            마이페이지
          </Link>
        </li>
      )}
      {auth.isLoggedIn ? (
        <li className="logout" onClick={auth.logout}>
          로그아웃
        </li>
      ) : (
        <>
          <li>
            <Link to={ROUTE.REGISTER.link} onClick={props.onClickNav}>
              회원가입
            </Link>
          </li>
          <li>
            <Link to={ROUTE.LOGIN.link} onClick={props.onClickNav}>
              로그인
            </Link>
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
