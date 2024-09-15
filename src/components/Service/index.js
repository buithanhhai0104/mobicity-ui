import React, { useRef, useState } from "react";
import styles from "./Service.module.scss";
import { Link } from "react-router-dom";
import h1 from "../../image/img Service/h1.webp";
import h2 from "../../image/img Service/h2.avif";
import h3 from "../../image/img Service/h3.avif";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import clsx from "clsx";

function Service() {
  const divRef = useRef(null);
  const [active, setActive] = useState(false);
  const scrollToEnd = () => {
    if (divRef.current) {
      // Cuộn đến cuối chiều ngang
      divRef.current.scrollTo({
        left: divRef.current.scrollWidth - divRef.current.clientWidth,
        behavior: "smooth",
      });
      setActive(true);
    }
  };
  const scrollToStart = () => {
    if (divRef.current) {
      // Cuộn đến đầu chiều ngang
      divRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
    setActive(false);
  };

  return (
    <div ref={divRef} className={clsx(styles["service-container"])}>
      <div className={clsx(styles["service-croll"])}>
        <div style={{ opacity: !active || "0.3" }}>
          <Link>
            <img src={h1} />
          </Link>
          <h3>Hướng dẫn sử dụng cho chủ xe </h3>
          <p>Bảng thông tin tình năng và hướng dẫn cho tiết dành cho bạn</p>
          <span>
            <Link>Tìm hiểu thêm</Link>
          </span>
        </div>
        <div style={{ opacity: !active || "0.3" }}>
          <Link>
            <img src={h2} />
          </Link>
          <h3>Đặt hẹn dịch vụ trực tuyến</h3>
          <p>Đặt lịch hẹn dịch vụ trực tuyến một cách thuận tiện. </p>
          <span>
            <Link>Đặt lịch hẹn</Link>
          </span>
        </div>
        <div style={{ opacity: active || "0.3" }}>
          <Link>
            <img src={h3} />
          </Link>
          <h3>Bộ sưu tập Mercedes-Benz</h3>
          <p>Khám phá sự đa dạng của Bộ sưu tập Mercedes-Benz.</p>
          <span>
            <Link>Tìm Hiểu Thêm</Link>
          </span>
        </div>
      </div>
      <button
        onClick={!active ? scrollToEnd : scrollToStart}
        className={clsx(styles["button"])}
        style={{ position: "absolute", left: !active || "92%" }}
      >
        {!active ? <GrNext /> : <GrPrevious />}
      </button>
    </div>
  );
}

export default Service;
