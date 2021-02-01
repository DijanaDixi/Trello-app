import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import {
  faCalendarAlt,
  faConciergeBell,
  faUserFriends,
  faEllipsisH,
  faColumns,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./TopBar.module.css";
import { useLocation } from "react-router-dom";

function TopBar({ setSideDrawer, showSideDrawer, boards }) {
  const [boardName, setBoardName] = useState("");

  let location = useLocation();

  useEffect(() => {
    const board = boards.find((el) => {
      const id = location.pathname.replace("/board/", "");
      return id === el.id;
    });
    if (board) {
      setBoardName(board.name);
    }
  }, [location, boards]);

  return (
    <div className={`row ${style.topBarIconHolder}`}>
      <div className={style.leftHolder}>
        <span className={cx(style.board, "d-flex align-items-center pl-2")}>
          <FontAwesomeIcon icon={faColumns} className={style.colorIcon} />{" "}
          <span className={style.more}></span>Board
        </span>
        <span className={cx(style.test, "d-fex align-items-center")}>
          {boardName}
        </span>
        <span className={style.star}>
          <FontAwesomeIcon icon={faStar} className={style.colorIcon} />
        </span>
        <span className={style.name}>Dijana Djordjevic </span>
        <span className={style.userFriends}>
          <FontAwesomeIcon icon={faUserFriends} className={style.colorIcon} />
          <span className={style.more}></span>Team Visible
        </span>
        <span className={style.invite}>Invite</span>
      </div>
      {/* Move icon on rigth onShow SideDrawer */}
      <div className={showSideDrawer ? `${style.moveIcon}` : ""}>
        <span className={style.calendar}>
          <FontAwesomeIcon icon={faCalendarAlt} className={style.colorIcon} />
          <span className={style.more}></span>Calendar
        </span>
        <span className={style.butler}>
          <FontAwesomeIcon icon={faConciergeBell} className={style.colorIcon} />
          <span className={style.more}></span>Butler
        </span>
        {/* change background color */}
        <span className={style.menu} onClick={() => setSideDrawer(true)}>
          <FontAwesomeIcon icon={faEllipsisH} className={style.colorIcon} />
          <span className={style.more}></span>Show Menu{" "}
        </span>
      </div>
    </div>
  );
}
TopBar.propTypes = {
  setSideDrawer: PropTypes.func,
  showSideDrawer: PropTypes.bool,
  boards: PropTypes.array,
};
export default TopBar;
