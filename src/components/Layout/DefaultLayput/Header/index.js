import React from "react";
import NavBar from "./Navbar";
import styles from "./header.module.scss";
import clsx from "clsx";
import TopHeader from "./TopHeader";

function Header() {
  return (
    <div className={clsx(styles.header)}>
      <TopHeader />
      <NavBar />
    </div>
  );
}

export default Header;
