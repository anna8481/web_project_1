import React, { useState, useEffect } from "react";
import * as Api from "../../utills/api";
import { Link } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = (props) => {
  const [category, setCategory] = useState(undefined);
  useEffect(() => {
    const init = async () => {
      const res = await Api.get("categorys");
      const data = await res.data;
      setCategory(data);
    };
    init();
  }, []);

  return (
    <ul className="nav-links">
      <li key="contact">
        <Link to={"/login"} onClick={props.onClickNav}>
          Contact
        </Link>
      </li>
      <li key="shop">
        Shop
        <ul>
          {Array.isArray(category) &&
            category.map((item) => (
              <li key={item._id} onClick={props.onClickNav}>
                <Link to={`/product/list/${item.title}`}>{item.title}</Link>
              </li>
            ))}
        </ul>
      </li>
    </ul>
  );
};

export default NavLinks;
