import React, { useContext } from "react";
import styles from "./../header.module.scss";
import clsx from "clsx";
import { useState } from "react";
import MainNav from "../../MainNav";
import useMediaQueries from "Hook/useMediaQueries";
import { onMenuContext } from "components/Context/ProductImgContext";
function NavBar() {
  const [navContent, setNavContent] = useState({});
  const [selected, setSelected] = useState(null);
  const { isDesktop, isTablet, isMobile } = useMediaQueries();

  function handleVehicle() {
    if (selected === "vehicle") {
      setNavContent({});
      setSelected(null);
    } else {
      setNavContent({
        title: "Các Dòng Xe ",
        content: [
          "Sandans",
          "Xe địa hình/SUV",
          "Xe Coupé",
          "Cabriolet",
          "Xe đa dụng",
        ],
      });
      setSelected("vehicle");
    }
  }

  function handleBuyOnline() {
    if (selected === "buyOnline") {
      setNavContent({});
      setSelected(null);
    } else {
      setNavContent({
        title: "Mua trực tuyến ",
        content: [
          "Xe mới",
          "Xe đã qua sử dụng",
          "Phụ kiện chính hãng",
          "Bộ sưu tập Mercedes-Benz",
          "Xe đa dụng",
        ],
      });
      setSelected("buyOnline");
    }
  }

  function handleAdvise() {
    if (selected === "advise") {
      setNavContent({});
      setSelected(null);
    } else {
      setNavContent({
        title: "Tư Vấn Mua Xe ",
        content: [
          "Ưu đãi hiện có",
          "Chọn cấu hình xe",
          "Đăng ký lái thử",
          "Danh sách Nhà Phân Phối",
          "Bảng giá & brochure",
          "Ưu đãi hiện có",
          "Khối doanh nghiệp & khách hàng ưu tiên",
        ],
      });
      setSelected("advise");
    }
  }
  function handleService() {
    if (selected === "service") {
      setNavContent({});
      setSelected(null);
    } else {
      setNavContent({
        title: "Dịch Vụ",
        content: [
          "Ưu đãi hiện có",
          "Đặt hẹn dịch vụ trực tuyến",
          "Dịch vụ hỗ trợ và cứu hộ",
          "Bảo dưỡng, Sửa chữa và Bảo hành",
          "Bảo hiểm",
          "Phụ tùng & dầu chính hãng",
          "Phong cách sống Mercedes",
          "Bản tin kỹ thuật",
          "Hướng dẫn sử dụng dành cho chủ sở hữu xe",
          "Chương trình Gói Dịch Vụ Mercedes-Benz",
        ],
      });
      setSelected("service");
    }
  }

  function handleOverlay() {
    setNavContent({});
    setSelected(null);
  }
  return (
    <>
      <ul className={clsx(styles.navbar)}>
        <li onClick={handleVehicle}>
          <span>Các dòng xe </span>
        </li>
        <li>
          <span onClick={handleAdvise}>Tư vấn mua xe</span>
        </li>
        <li onClick={handleBuyOnline}>
          <span>Mua trực tuyến</span>
        </li>
        <li>
          <span onClick={handleService}>Dịch Vụ</span>
        </li>
        <li>
          <span>Thế giới Mercedes-Benz</span>
        </li>
      </ul>
      <div className={clsx(styles["MainNav-container"])}>
        <MainNav navContent={navContent} />
      </div>
      {selected !== null && (
        <div onClick={handleOverlay} className={clsx(styles.overlayBody)}></div>
      )}
    </>
  );
}

export default NavBar;
