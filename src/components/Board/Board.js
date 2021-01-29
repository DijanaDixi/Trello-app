import React from "react";
import Header from "../Header/Header";
import List from "../List/List";
import TopBar from "../TopBar/TopBar";
import style from "./Board.module.css";

function Board() {
  return (
    <>
      <div
        className={`container-fluid ${style.bkg}`}
        style={{
          backgroundRepeat: "no-repeat repeat",
          backgroundSize: "cover",
          display: "inline-block",
          backgroundColor: "green",
        }}
      >
        <div className={style.bar}>
          <Header />
          <TopBar />
        </div>
        <List />
      </div>
    </>
  );
}

export default Board;
