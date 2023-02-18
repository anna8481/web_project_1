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
      console.log(category);
    };

    init();
  }, [category]);
  return (
    <ul className="nav-links">
      <li>
        <Link to={"/login"}>Contact</Link>
      </li>
      <li>
        Shop
        <ul>
          {Array.isArray(category) &&
            category.map((item) => <li key={item._id}>{item.title}</li>)}
        </ul>
      </li>
    </ul>
  );
};

export default NavLinks;
