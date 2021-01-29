import React from "react";
import Header from "../Header/Header";
import List from "../List/List";
import TopBar from "../TopBar/TopBar";

function Board(){
    return(
        <div className="container-fluid">
            <Header/>
            <TopBar/>
            <List/>

        </div>
    )
}

export default Board;