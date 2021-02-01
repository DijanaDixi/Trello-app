const apiKey = "b240e2c7798fd2a7588e5fb250772464";
const apiToken =
  "13f1144d615bf027d2c7be2c2fb376e928a9ab0d5243ec1f74ba7cf94bc3843c";

class TrelloApi {
  static fetchBoards() {
    return fetch(
      `https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
    ).then((res) => res.json());
  }
  static fetchLists(boardId) {
    return fetch(
      `https://api.trello.com/1/boards/${boardId}/lists?key=${apiKey}&token=${apiToken}`
    ).then((res) => res.json());
  }
  static fetchCards(boardId) {
    return fetch(
      `https://api.trello.com/1/boards/${boardId}/cards?key=${apiKey}&token=${apiToken}`
    ).then((res) => res.json());
  }
  static addList(boardId, value) {
    return fetch(
      `https://api.trello.com/1/boards/${boardId}/lists?key=${apiKey}&token=${apiToken}&name=${value}`,
      {
        method: "post",
      }
    ).then((res) => res.json());
  }
  static addCards(value, listId) {
    return fetch(
      `https://api.trello.com/1/cards?key=${apiKey}&token=${apiToken}&idList=${listId}&name=${value}`,
      {
        method: "post",
      }
    ).then((res) => res.json());
  }
  static updateListName(listName, listId) {
    return fetch(
      `https://api.trello.com/1/lists/${listId}?key=${apiKey}&token=${apiToken}&name=${listName}`,
      {
        method: "put",
      }
    ).then((res) => res.json());
  }
  static updateCards(cardId, cardContent) {
    return fetch(
      `https://api.trello.com/1/cards/${cardId}?key=${apiKey}&token=${apiToken}&name=${cardContent}`,
      {
        method: "put",
      }
    ).then((res) => res.json());
  }
  static deleteCard(cardId) {
    return fetch(
      `https://api.trello.com/1/cards/${cardId}?key=${apiKey}&token=${apiToken}`,
      {
        method: "delete",
      }
    ).then((res) => res.json());
  }
  static addBoard(name) {
    return fetch(
      `https://api.trello.com/1/boards/?key=${apiKey}&token=${apiToken}&name=${name}`,
      {
        method: "post",
      }
    ).then((res) => res.json());
  }
}

export default TrelloApi;
