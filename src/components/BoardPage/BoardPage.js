import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Board from "../Board/Board";
import StoreApi from "../../utilis/storeApi";
import TrelloApi from "../../api/TrelloApi";

function BoardPage() {
  const [lists, setLists] = useState([]);
  const [cards, setCards] = useState([]);

  // board id
  let { id } = useParams();

  useEffect(() => {
    fetchLists();
    fetchCards();
  }, [id]);

  const fetchLists = () => {
    TrelloApi.fetchLists(id).then((data) => {
      setLists(data);
    });
  };
  const fetchCards = () => {
    TrelloApi.fetchCards(id).then((data) => {
      setCards(data);
    });
  };

  const addList = (value) => {
    TrelloApi.addList(id, value).then(() => fetchLists());
  };

  const addCards = (value, listId) => {
    TrelloApi.addCards(value, listId).then(() => {
      fetchCards();
    });
  };

  const updateListName = (listName, listId) => {
    TrelloApi.updateListName(listName, listId).then(() => {
      fetchLists();
    });
  };

  const updateCards = (cardContent, cardId) => {
    TrelloApi.updateCards(cardContent, cardId).then(() => {
      fetchCards();
    });
  };
  const deleteCard = (cardId) => {
    TrelloApi.deleteCard(cardId).then(() => {
      fetchCards();
    });
  };

  return (
    <StoreApi.Provider
      value={{
        addList,
        fetchLists,
        addCards,
        fetchCards,
        updateListName,
        updateCards,
        deleteCard,
      }}
    >
      <Board lists={lists} cards={cards} />
    </StoreApi.Provider>
  );
}

export default BoardPage;
