import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import ProfileDropdown from "./profile-dropdown";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeSidebar = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <h1 className="siteLogo">MusiList</h1>
      <div className="dropdownContainer">
        <div className="dropdown">
          <button className="dropbutton">Songs</button>
          <div className="dropdown-content">
            <a href="#">Top Songs</a>
            <a href="#">Seasonal Songs</a>
            <a href="#">Genres</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbutton">
            Artists
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Top Streamed</a>
            <a href="#">Genre Artists</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbutton">
            Albums
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Top Albums</a>
            <a href="#">Genre Albums</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbutton">
            Industry
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Producers</a>
            <a href="#">Labels</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbutton">
            Community
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Forums</a>
            <a href="#">Reviews</a>
            <a href="#">Grousp</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbutton">
            About
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">About Us</a>
            <a href="#">What is ___</a>
          </div>
        </div>
      </div>

      {/*Menu and Profile Button Functionality*/}
      <div className="hub">
        <ProfileDropdown />

        {menuOpen ? (
          <VscChromeClose className="menu close-icon" onClick={closeSidebar} />
        ) : (
          <BiMenuAltRight className="menu" onClick={toggleMenu} />
        )}

        <div className={`sidebar${menuOpen ? " open" : ""}`}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
