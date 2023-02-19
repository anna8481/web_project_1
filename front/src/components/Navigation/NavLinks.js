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
      <li>
        Shop
        <ul>
          {Array.isArray(category) &&
            category.map((item) => (
              <Link to={`/product/list/${item.title}`}>
                <li key={item._id} onClick={props.onClickClose}>
                  {item.title}
                </li>
              </Link>
            ))}
        </ul>
      </li>
      <li>
        <Link to={"/login"} onClick={props.onClickClose}>
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
