import React, { useContext } from "react";
import { TitleContext } from "components/Context/TitleContext";
import styles from "../Discover.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

function Discover() {
  const DiscoverPage = useContext(TitleContext);
  if (!DiscoverPage) {
    return <div>Không có dữ liệu để hiển thị</div>;
  }

  return (
    <div className={clsx(styles.titleContainer)}>
      <h2 style={{ color: DiscoverPage.ColorTitle }}>{DiscoverPage.title}</h2>
      <Link to="/all-cars" style={{ color: DiscoverPage.ColorTitle }}>
        Khám phá tất cả mẫu xe
      </Link>
      {!DiscoverPage.electricCar || (
        <Link to="/electric-cars" style={{ color: DiscoverPage.ColorTitle }}>
          Khám phá tất cả xe điện
        </Link>
      )}
    </div>
  );
}

export default Discover;
