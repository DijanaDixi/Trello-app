import React, { useState, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalCard from "./ModalCard/ModalCard";
import storeApi from "../../utilis/storeApi";
import style from "./Card.module.css";

function Card({ card }) {
  const [show, setShow] = useState(false);
  const [cardContent, setCardContent] = useState(card.name);
  const [position, setPosition] = useState({
    top: "",
    left: "",
  });
  const { updateCards, deleteCard } = useContext(storeApi);
  const el = useRef();

  const handleShow = () => {
    getPositionForModal(), setShow(true);
  };
  const handleClose = () => {
    updateCards(cardContent, card.id);
    setShow(false);
  };

  const getName = (e) => {
    setCardContent(e.target.value);
  };
  const getPositionForModal = () => {
    let topPos = el.current.getBoundingClientRect().top + 20;
    let leftPos = el.current.getBoundingClientRect().left - 810;

    setPosition({
      top: topPos,
      left: leftPos,
    });
  };

  return (
    <>
      <div
        ref={el}
        className={`card ${style.trelloCard} `}
        style={{ width: "300px", minHeight: "25px" }}
      >
        <div className="card-body p-2">
          <div className="card-text d-flex justify-content-between">
            {cardContent}
            <div>
              <span className={"mr-2 " + style.trash}>
                <FontAwesomeIcon
                  color="#3d5d73"
                  onClick={() => deleteCard(card.id)}
                  icon={faTrash}
                />
              </span>
              <span className={style.pen} onClick={handleShow}>
                <FontAwesomeIcon icon={faPen} color="#3d5d73" />
              </span>
            </div>
          </div>
          <ModalCard
            position={position}
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
            cardContent={cardContent}
            getName={getName}
          />
        </div>
      </div>
    </>
  );
}
Card.propTypes = {
  card: PropTypes.object,
};
export default Card;
