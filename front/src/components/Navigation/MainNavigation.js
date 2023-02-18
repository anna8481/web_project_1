import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Api from "../../utills/api";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [category, setCategory] = useState(undefined);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

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
    <React.Fragment>
      {drawerIsOpen && <div className="backdrop" onClick={closeDrawer}></div>}
      {drawerIsOpen && (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <nav className="main-navigation__header-nav">
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
        </nav>

        <h1 className="main-navigation__title">
          <Link to="/">Moteam</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;

/*
function Slider() {
  const [category, setCategory] = useState(undefined);

  const init = async () => {
    const res = await Api.get("categorys");
    const data = await res.data;
    setCategory(data);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div className="section">
        <div className="category-container">
          {Array.isArray(category) &&
            category.map((item) => (
              <Category
                key={item._id}
                itemId={item._id}
                title={item.title}
                img={
                  process.env.REACT_APP_FILE_RES_URL +
                  "/" +
                  item.imageKey +
                  ".jpg"
                }
              ></Category>
            ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}*/
