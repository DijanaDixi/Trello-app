/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import InputArea from "./InputArea";
import style from "./ReusableInputContainer.module.css";

function ReusableInputContainer({  type}) {
  
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <div className={style.inputContainer}>
          <InputArea open={open} setOpen={setOpen}  type={type} />
          {!open ? (
            <div className={type==="card"?style.addButtonCard:style.addButtonList}>
              <h5 onClick={() => setOpen(!open)}>
                {type === "card" ? "+Add card" : "+Add another List"}
              </h5>
            </div>
          ) : null}
        </div>
      </>
    );
  }
  
  export default ReusableInputContainer;