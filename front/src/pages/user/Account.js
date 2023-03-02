import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";
import { ROUTE } from "../../utills/route";
import Title from "../../components/Title";

const Account = () => {
  return (
    <section className="section">
      <Title title="My Account"></Title>
      <div className="container-center">
        <button className="account_button">
          <Link to={ROUTE.ACCOUNT_ORDERS.link}>
            <p className="main-name">Order History</p>
            <p className="sub-name">주문조회</p>
          </Link>
        </button>
        <button className="account_button">
          <Link to={ROUTE.MYACCOUNT.link}>
            <p className="main-name">My Account</p>
            <p className="sub-name">회원정보 관리</p>
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Account;
