import React, { useState } from "react";
import Header from "../Header/Header";
import TopBar from "../TopBar/TopBar";
import SideDrawer from "../SideDrawer/SideDrawer";
import List from "../List/List";
import style from "./Board.module.css";

function Board() {
  // Side Drawer
  const [showSideDrawer, setSideDrawer] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("red");

  return (
    <>
      <div
        className={`container-fluid ${style.bkg}`}
        style={{
          background: `url(${backgroundImage}`,
          backgroundRepeat:"no-repeat",
          backgroundSize: "cover",
          display:"inline-block",
          backgroundColor: backgroundImage,
          backgroundsize:"contain"
        }}
      >
       
        <div className={style.bar}>
        <Header />
        <TopBar setSideDrawer={setSideDrawer} showSideDrawer={showSideDrawer} />
        <SideDrawer
          setSideDrawer={setSideDrawer}
          showSideDrawer={showSideDrawer}
          setBackgroundImage={setBackgroundImage}
        />
      </div>
      <div className={style.containerBoard}>
     
        <List/>
        </div>
        <div><p style={{fontSize:"50px", color:"green"}}>{}</p></div>
    </div>
    </>
  );
}

export default Board;
