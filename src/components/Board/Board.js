import React from "react";
import PropTypes from "prop-types";
import ReusableInputComponent from "../ReusableInputContainer/ReusableInputContainer";
import List from "../List/List";
import style from "./Board.module.css";

function Board({ lists, cards, addList }) {
  //  reverse lists
  var newLists = [];
  for (var i = lists.length - 1; i >= 0; i--) {
    newLists.push(lists[i]);
  }

  const listData = newLists.map((list) => {
    return <List list={list} key={list.id} cards={cards} />;
  });

  return (
    <>
      <div className={style.containerBoard}>
        {listData}
        <ReusableInputComponent type="list" addList={addList} />
      </div>
    </>
  );
}
Board.propTypes = {
  lists: PropTypes.array,
  cards: PropTypes.array,
  addList: PropTypes.func,
};
export default Board;
