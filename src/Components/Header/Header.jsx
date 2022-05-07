import React from "react";
import "../Header/Header.scss";
import logo from "../assets/svg/logo.svg";
import sun from "../assets/svg/sun.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <nav className="header__nav">
          <a className="header__logo" to="/">
            <img src={logo} alt="bookshelter icon" />
          </a>
          <div className="header__nav-inputBox">
            <input
              type="text"
              placeholder="Book Search ..."
              required
              className="header__nav-inputBox_inputText"
            />
            <i className="bi bi-search header__nav-inputBox_icon"></i>
          </div>
          <div className="header__nav-item">
            <img src={sun} alt="sun icons" />
            <button className="header__nav-item_logoutBtn">Logout</button>
          </div>
        </nav>
        <div className="header__orderingBox">
          <p className="header__orderingBox-desc">
            Showing <span>18</span> Result(s)
          </p>
          <button className="header__orderingBox-orderidBtn">
            <i className="bi bi-calendar2-event"></i> Order by newest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
