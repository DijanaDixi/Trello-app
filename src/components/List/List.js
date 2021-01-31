import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Card/Card";
import ReusableInputComponent from "../ReusableInputContainer/ReusableInputContainer";
import style from "./List.module.css";
import storeApi from "../../utilis/storeApi";

function List({ list, cards }) {

  const title = list.name;
  const listId = list.id;

  const [listName, setListName] = useState(title);
  const [open, setOpen] = useState(false);

  const { updateListName } = useContext(storeApi);

  const getName = (e) => {
    setListName(e.target.value);
  };

  const handleOnBlur = () => {
    updateListName(listName, listId);
    setOpen(false);
  };

  const filterCards = cards.filter((card) => card.idList == listId);

  return (
    <div className={style.list}>
      <div
        className={"card-header "+ style.listTitle}
        onClick={() => setOpen(true)}
        onBlur={() => handleOnBlur()}
      >
        {open ? (
          <span>
            <input type="text" value={listName} onChange={getName} className={style.inputTitle}/>
            <FontAwesomeIcon icon={faEllipsisH} className={style.more} />
          </span>
        ) : (
          <span >
            {listName}
            <FontAwesomeIcon icon={faEllipsisH} className={style.more} />
          </span>
        )}
      </div>
      {filterCards
        ? filterCards.map((card) => {
            return <Card card={card} key={card.id} />;
          })
        : null}
      <ReusableInputComponent type="card" listId={listId} />
    </div>
  );
}

List.propTypes = {
 list: PropTypes.object,
 cards:PropTypes.array
};
export default List;
