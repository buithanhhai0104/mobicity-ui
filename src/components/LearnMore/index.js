import React from "react";
import clsx from "clsx";
import styles from "./LearnMore.module.scss";
import { Link } from "react-router-dom";
function LearnMore({ image, content, title, carSearch, colorAmg }) {
  return (
    <div className={clsx(styles.LearnItem)}>
      <img src={image} />
      <div className={clsx(styles.LearnContent)}>
        <div style={{ position: "absolute", bottom: "80px" }}>
          <p>{content}</p>
          <h2 style={{ color: "white" }}>{title}</h2>
          <div className={clsx(styles.ContentLink)}>
            <span
              style={{
                marginLeft: "20px",
                padding: " 15px 25px",
                backgroundColor: "#0078d6",
              }}
            >
              Tìm hiểu thêm
            </span>
            <span>
              <Link>{carSearch}</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
