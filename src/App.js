/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BoardPage from "./components/BoardPage/BoardPage";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import TopBar from "./components/TopBar/TopBar";
import TrelloApi from "./api/TrelloApi";
import style from "./App.css";


function App() {
  const [showSideDrawer, setSideDrawer] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState({
    color:  "#008080",
    img:
      "",
  });

 
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = () => {
    TrelloApi.fetchBoards().then((data) => {
      setBoards(data);
    });
  };

  const addBoard = (name) => {
    TrelloApi.addBoard(name).then(() => {
      fetchBoards();
    });
  };

  return (
    <>
      <BrowserRouter>
        <div
          className={`container-fluid ${style.board}`}
          style={{
            backgroundImage: backgroundImage.img
              ? `url(${backgroundImage.img}`
              : "",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: backgroundImage.color || "",
            backgroundsize: "contain",
          }}
        >
          <div className={style.bar}>
            <Header boards={boards} addBoard={addBoard} />
            <TopBar
              boards={boards}
              setSideDrawer={setSideDrawer}
              showSideDrawer={showSideDrawer}
             
            />
            <SideDrawer
              setSideDrawer={setSideDrawer}
              showSideDrawer={showSideDrawer}
              setBackgroundImage={setBackgroundImage}
            />
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/board/:id" component={BoardPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
