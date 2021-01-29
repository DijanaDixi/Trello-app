import React from "react";
import style from "./Card.module.css";

function Card() {
    return (
      <div className={`card ${style.trelloCard}`} style={{"width": "20rem"}} >
        <div className="card-body">
          <p className="card-text">
          content
          </p>
        </div>
      </div>
    );
  }
  
  export default Card;