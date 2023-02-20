import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import { ROUTE } from "../utills/route";

function Category({ title, img, itemId }) {
  return (
    <div className="category-card" key={itemId}>
      <Link to={`/product/list/${title}`}>
        <div className="category-image-container">
          <img src={img} className="category-image" alt="카테고리 이미지"></img>
        </div>
        <div className="category-title">{title}</div>
      </Link>
    </div>
  );
}

export default Category;
