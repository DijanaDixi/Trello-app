import React from "react";
import Card from "../Card/Card";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./List.module.css";

function List() {
  return (
    <div className={style.list}>
      <div className="card-header">
        <span>
          LIST
          <FontAwesomeIcon icon={faEllipsisH} className={style.more} />
        </span>
      </div>
      <Card />
    </div>
  );
}

export default List;
