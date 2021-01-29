import React from "react";
import { faCalendarAlt, faConciergeBell, faUserFriends, faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./TopBar.module.css"


function TopBar(){
    return(
        <div className={`row ${style.topBarIconHolder}`}>
        <div className={style.something}>
        <span className={style.board}><FontAwesomeIcon icon={faStar} className={style.colorIcon} /><span className={style.more}></span>Board</span>
        <span className={style.test}>TEST BOARD</span>
        <span className={style.star}><FontAwesomeIcon icon={faStar} className={style.colorIcon} /></span>
        <span className={style.name}>Dijana Djordjevic </span>
        <span className={style.userFriends}><FontAwesomeIcon icon={faUserFriends} className={style.colorIcon} /><span className={style.more}></span>Team Visible</span>
        <span className={style.invite}>Invite</span>
        </div>
        {/* Move icon on rigth onShow SideDrawer */}
        <div>
        <span className={style.calendar}><FontAwesomeIcon icon={faCalendarAlt} className={style.colorIcon} /><span className={style.more}></span>Calendar</span>
        <span className={style.butler}><FontAwesomeIcon icon={faConciergeBell} className={style.colorIcon} /><span className={style.more}></span>Butler</span>
        {/* change background color */}
        <span 
     
        ><FontAwesomeIcon icon={faEllipsisH} className={style.colorIcon} /><span className={style.more}></span>Show Menu </span>
        </div>
  
      </div>
    )
}

export default TopBar;