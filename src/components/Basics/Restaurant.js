import React, { useState } from "react";
import "./style.css";
import Menu from "./Menuapi";
import Menucard from "../Menucard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
];
console.log(uniqueList);
const Restaurant = () => {
  const [Menudata, setMenudata] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  // console.log(Menudata);
  const filterItem = (category) => {
    if (category === "All") {
      setMenuList(Menudata);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenudata(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <Menucard Menudata={Menudata} />
    </>
  );
};

export default Restaurant;
