import React from "react";
import styles from "./introduce.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
function Introduce({ img, title, content1, content2, linkName, reverseImage }) {
  return (
    <div
      className={clsx(
        styles[reverseImage ? "introduce-container2" : "introduce-container"]
      )}
    >
      <div
        className={clsx(
          styles[reverseImage ? "introduce-content2" : "introduce-content"]
        )}
      >
        <h3>{title}</h3>
        <p>
          {content1}
          <br />
          {content2}
        </p>

        <span>
          <Link>{linkName}</Link>
        </span>
      </div>
      <img src={img} />
    </div>
  );
}

export default Introduce;
