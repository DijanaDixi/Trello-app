import React, { useState, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalCard from "./ModalCard/ModalCard";
import storeApi from "../../utilis/storeApi";
import style from "./Card.module.css";

function Card({ card }) {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({
    top: "",
    left: "",
  });
  const el = useRef();
  const { updateCards, deleteCard } = useContext(storeApi);

  const handleShow = () => {
    getPositionForModal(), setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };
  const handleClose = (id, text) => {
    updateCards(id, text);
    setShow(false);
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
            {card.name}
            <div>
              <span className={"mr-2 " + style.trash}>
                <FontAwesomeIcon
                  color="#6b778c"
                  onClick={() => deleteCard(card.id)}
                  icon={faTrash}
                />
              </span>
              <span className={style.pen} onClick={handleShow}>
                <FontAwesomeIcon icon={faPen} color="#6b778c" />
              </span>
            </div>
          </div>
          <ModalCard
            position={position}
            show={show}
            handleCloseModal={handleCloseModal}
            handleClose={handleClose}
            handleShow={handleShow}
            card={card}
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
