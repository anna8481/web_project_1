import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import NavLinksUser from './NavLinksUser';
import SideDrawer from './SideDrawer';
import './NavLinks.css';
import './MainNavigation.css';

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const handleOpenDrawer = () => {
    setDrawerIsOpen(true);
  };
  const handleCloseDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && (
        <div className='backdrop' onClick={handleCloseDrawer}></div>
      )}

      <SideDrawer show={drawerIsOpen}>
        <nav className='main-navigation__drawer-nav'>
          <NavLinksUser onClickNav={handleCloseDrawer} />
          <NavLinks onClickNav={handleCloseDrawer} />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className='main-navigation__menu-btn'
          onClick={handleOpenDrawer}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>

        <h1 className='main-navigation__title'>
          <Link to='/'>Moteam</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLinksUser />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
