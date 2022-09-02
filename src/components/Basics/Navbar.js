import React from "react";
import styles from "./mystyle.module.css";
const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className={styles.title}>Anu Veg Restaurant</div>

        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
