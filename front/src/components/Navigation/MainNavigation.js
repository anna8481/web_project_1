import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import NavLinksUser from "./NavLinksUser";
import SideDrawer from "./SideDrawer";
import "./NavLinks.css";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <div className="backdrop" onClick={closeDrawer}></div>}
      {drawerIsOpen && (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <NavLinksUser />
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
          <NavLinks />
        </nav>

        <h1 className="main-navigation__title">
          <Link to="/">Moteam</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinksUser />
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
