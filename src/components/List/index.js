import React, { useState } from "react";
import styles from "./List.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
function ListItem(props) {
  const { firstIcon, title, content, lastIcon } = props;
  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };
  return (
    <div className={clsx(styles["list-container"])}>
      <Link
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={clsx(styles["list-item"])}
      >
        <span
          style={{ opacity: active ? "0" : "1" }}
          className={clsx(styles["first-icon"])}
        >
          {firstIcon}
        </span>

        <div className={clsx(styles["list-item--content"])}>
          <div
            style={{
              transform: active ? "translateX(-25px)" : "translateX(0px)",
              transition: "transform 0.5s ease",
            }}
          >
            <span
              style={{ fontSize: "20px", display: "block", padding: "5px 0px" }}
            >
              <b>{title}</b>
            </span>
            <span>{content}</span>
          </div>

          <span
            style={{ opacity: !active ? "0" : "1" }}
            className={clsx(styles["last-icon"])}
          >
            {lastIcon}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default ListItem;
