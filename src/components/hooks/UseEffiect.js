import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = React.useState(0);//returns a array of two elements
  
  useEffect(()=>{
    // console.log("hii");// user required when in first time
     document.title=`Chats(${myNum})`
  },);
  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
    
      </div>
    </>
  );
};

export default UseEffect;