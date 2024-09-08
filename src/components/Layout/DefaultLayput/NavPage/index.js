import React from "react";
import { Link } from "react-router-dom";
import MerSrc from "../../../../image/mer.svg";
import AmgSrc from "../../../../image/amg.svg";
import MaybachSrc from "../../../../image/download.svg";
import clsx from "clsx";
import styles from "./NavPage.module.scss";
function NavPage() {
  return (
    <ul className={clsx(styles.pagelink)}>
      <li>
        <Link to="/">
          <img src={MerSrc} />
        </Link>
      </li>
      <li>
        <Link to="/amg">
          <img src={AmgSrc} />
        </Link>
      </li>
      <li>
        <Link to="/maybach">
          <img src={MaybachSrc} />
        </Link>
      </li>
    </ul>
  );
}

export default NavPage;
