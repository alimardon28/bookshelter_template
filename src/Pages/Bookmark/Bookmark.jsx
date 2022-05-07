import React from "react";
import "../Bookmark/Bookmark.scss";

const Bookmark = () => {
  return (
    <div className="bookmark">
      <div className="container">
        <div className="bookmark__top">
          <h2 className="bookmark__top-title">Bookmarks</h2>
          <p className="bookmark__top-desc">
            If you don’t like to read, you<br></br> haven’t found the right book
          </p>
        </div>
        <ul className="bookmark__list">
          <li className="bookmark__list-item">
            <div className="bookmark__list-item_box">
              <h3 className="bookmark__list-item_title">Python</h3>
              <p className="bookmark__list-item_desc">David M. Beazley</p>
            </div>
            <button className="bookmark__list-item_button">
              <i className="bi bi-book bookmark__list-item_button-book"></i>
            </button>
            <button className="bookmark__list-item_button">
              <i className="bi bi-backspace bookmark__list-item_button-backspace"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bookmark;
