import React from "react";
import img from "../../Components/assets/img/images.png";
import "../BookElements/BookElements.scss";

const BookElements = () => {
  return (
    <>
      <div className="bookmarkElements">
        <div className="container">
          <ul className="bookmarkElements__list">
            <li className="bookmarkElements__list-item">
              <div className="bookmarkElements__list-item_images">
                <img src={img} alt="images" />
              </div>
              <div className="bookmarkElements__list-item_element">
                <h3 className="bookmarkElements__list-item_element-title">
                  Python
                </h3>
                <p className="bookmarkElements__list-item_element-desc">
                  David M. Beazley
                </p>
                <span className="bookmarkElements__list-item_element-number">
                  2009
                </span>
              </div>
              <div className="bookmarkElements__list-item_Buttons">
                <button className="bookmarkElements__list-item_Buttons-button">
                  Bookmark
                </button>
                <button className="bookmarkElements__list-item_Buttons-button">
                  More Info
                </button>
              </div>
              <div className="bookmarkElements__list-item_button">
                <button className="bookmarkElements__list-item_button-btn">
                  Read
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BookElements;
