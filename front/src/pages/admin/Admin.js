import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../utills/route";
import Title from "../../components/Title";

const Admin = () => {
  return (
    <section className="section">
      <Title title="Admin"></Title>
      <div className="container-center">
        <button className="account_button">
          <Link to={ROUTE.ADMIN_ORDERS.link}>
            <p className="main-name">Order Manage</p>
            <p className="sub-name">주문 관리</p>
          </Link>
        </button>

        <button className="account_button">
          <Link to={ROUTE.ADMIN_USERS.link}>
            <p className="main-name">User Manage</p>
            <p className="sub-name">회원 관리</p>
          </Link>
        </button>

        <button className="account_button">
          <Link to={ROUTE.PRODUCT_ADD.link}>
            <p className="main-name">Add Product</p>
            <p className="sub-name">제품 등록</p>
          </Link>
        </button>

        <button className="account_button">
          <Link to={ROUTE.CATEGORY_ADD.link}>
            <p className="main-name">Add Category</p>
            <p className="sub-name">카테고리 추가</p>
          </Link>
        </button>

        <button className="account_button">
          <Link to={ROUTE.CATEGORY_MANAGE.link}>
            <p className="main-name">Category Manage</p>
            <p className="sub-name">카테고리 조회</p>
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Admin;
