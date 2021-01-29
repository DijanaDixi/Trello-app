import React from "react";
import { faHome, faColumns, faSearch,faPlus, faBell, faInfoCircle, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Header.module.css";

function Header(){
   return(
        <header>
          <div className={`${style.nav} row`}>
    
          <div>
          <span className={style.home}><FontAwesomeIcon icon={faHome} className={style.colorIcon} /></span>
          <span className={style.boards}><FontAwesomeIcon icon={faColumns} className={style.colorIcon} /> Boards</span>
          <span className={style.search}><FontAwesomeIcon icon={faSearch} className={style.colorIcon} /> </span>
          </div>
    
            <div>
             <span><img src="https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png" alt="" className={style.logo}/></span>
            </div>
            
            <div>
              <span className={style.plus} ><FontAwesomeIcon icon={faPlus} className={style.colorIcon} /></span>
              <span className={style.bell}><FontAwesomeIcon icon={faBell} className={style.colorIcon} /></span>
              <span className={style.infoCircle}><FontAwesomeIcon icon={faInfoCircle} className={style.colorIcon} /></span>
              <span className={style.userCircle}><FontAwesomeIcon icon={faUserCircle} className={style.colorIcon} /></span>
            </div>
          </div>
        </header>
   )
}

export default Header;