/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./InputArea.module.css";

function InputArea({ open, setOpen, type }) {
  // input value
  const [value, getValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    getValue(e.target.value);
  };

  return (
    <>
      {open ? (
        <div className={style.card}>
          <form>
            <label>
              <input type="text" value={value} onChange={handleChange} />
            </label>
            <input
              type="submit"
              value={type === "card" ? "Add Card" : "Add list"}
            />
          </form>

          <FontAwesomeIcon
            icon={faTimes}
            className={style.timesIcon}
            onClick={() => setOpen(false)}
          />
        </div>
      ) : null}
    </>
  );
}

export default InputArea;
