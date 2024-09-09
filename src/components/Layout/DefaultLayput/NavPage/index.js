import React from "react";
import { Link } from "react-router-dom";
import MerSrc from "../../../../image/mer.svg";
import AmgSrc from "../../../../image/amg.svg";
import MaybachSrc from "../../../../image/download.svg";
import clsx from "clsx";
import styles from "./NavPage.module.scss";

function NavPage({ activeColor }) {
  return (
    <ul className={clsx(styles.pagelink)}>
      <li style={{ backgroundColor: activeColor === "glc" || "white" }}>
        <Link to="/">
          <img src={MerSrc} />
        </Link>
      </li>
      <li style={{ backgroundColor: activeColor === "amg" || "white" }}>
        <Link to="/amg">
          <img src={AmgSrc} />
        </Link>
      </li>
      <li style={{ backgroundColor: activeColor === "maybach" || "white" }}>
        <Link to="/maybach">
          <img src={MaybachSrc} />
        </Link>
      </li>
    </ul>
  );
}

export default NavPage;
