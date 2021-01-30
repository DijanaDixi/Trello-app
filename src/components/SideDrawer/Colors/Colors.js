/* eslint-disable react/prop-types */
import React from "react";
import Fade from "react-bootstrap/Fade";
import style from "../SideDrawer.module.css"

function Colors({colors,color,setBackgroundImage}){
    return(
        <Fade in={color}>
        <div className={style.colorContainer}>
          {colors.map((color, index) => {
            return (
              <div
                className={style.box}
                key={index}
                style={{
                  backgroundColor: color,
                  backgroundImage: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                onClick={()=>setBackgroundImage(color)}
              ></div>
            );
          })}
        </div>
      </Fade>
    )
}

export default Colors;