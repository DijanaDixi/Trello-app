/* eslint-disable react/prop-types */
import React from "react";
import Fade from "react-bootstrap/Fade";
import style from "../SideDrawer.module.css";

function Images({images,displayImage,setBackgroundImage}){
    return(
        <Fade in={displayImage}>
        <div className={style.colorContainer}>
          {images.map((image, index) => {
            return (
              <div
                className={style.box}
                key={index}
                style={{
                  backgroundImage: `url(${image.thumb}`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize:"cover"
                }}
                onClick={()=>setBackgroundImage(image.full)}
              ></div>
            );
          })}
        </div>
      </Fade>
    )
}

export default Images;