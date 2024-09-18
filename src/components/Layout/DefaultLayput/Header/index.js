import React from "react";
import styles from "./header.module.scss";
import clsx from "clsx";
import { useState } from "react";
import useMediaQueries from "Hook/useMediaQueries";
import InputSearch from "./InputSearch";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../../../image/logo/logo.png";

function Header() {
  const [selected, setSelected] = useState(null);
  const { isDesktop, isTablet, isMobile } = useMediaQueries();
  const [hidden, setHidden] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const [prevMenu, setPrevMenu] = useState("");

  const data = [
    {
      id: "1",
      title: "Các dòng xe",
      children: [
        {
          id: "1.1",
          title: "Tất cả các dòng xe",
        },
        {
          id: "1.2",
          title: "Điện",
        },
        {
          id: "1.3",
          title: "Sedans",
          children: [
            {
              id: "1.3.1",
              title: "EQS Sedan ",
              link: "",
            },
            {
              id: "1.3.2",
              title: "A-Class ",
              link: "",
            },
            {
              id: "1.3.3",
              title: "C-Class ",
              link: "",
            },
            {
              id: "1.3.4",
              title: "E-Class ",
              link: "",
            },
            {
              id: "1.3.5",
              title: "S-Class ",
              link: "",
            },
            {
              id: "1.3.6",
              title: "Mercedes-Maybach S-Class ",
              link: "",
            },
          ],
        },
        {
          id: "1.4",
          title: "Xe địa hình / SUV",
          children: [
            {
              id: "1.4.1",
              title: "EQB",
            },
            {
              id: "1.4.2",
              title: "EQE SUV",
            },
            {
              id: "1.4.3",
              title: "GLA",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      title: "Mua trực tuyến",
      children: [
        {
          id: "2.1",
          title: "Xe mới",
        },
        {
          id: "2.2",
          title: "Xe đã qua sử dụng",
        },
        {
          id: "2.3",
          title: "Phụ kiện chính hãng",
        },
        {
          id: "2.4",
          title: "Bộ sưu tập Mercedes-Benz",
        },
      ],
    },
    {
      id: "3",
      title: "Tư vấn mua xe",
      children: [
        {
          title: "Ưu đãi hiện có",
        },
        {
          title: "Chọn cấu hình xe",
        },
        {
          title: "Đăng ký lái thử",
        },
        {
          title: "Danh sách Nhà Phân Phối",
        },
        {
          title: "Bảng giá & brochure",
        },
        {
          title: "Khối doanh nghiệp & khách hàng ưu tiên",
        },
      ],
    },
    {
      id: "4",
      title: "Dịch vụ",
      children: [
        {
          id: "4.1",
          title: "Ưu đãi hiện có",
        },
        {
          id: "4.2",
          title: "Đặt hẹn dịch vụ trực tuyến",
        },
        {
          id: "4.3",
          title: "Dịch vụ hỗ trợ và cứu hộ",
        },
        {
          id: "4.4",
          title: "Bảo dưỡng, Sửa chữa và Bảo hành",
        },
        {
          id: "4.5",
          title: "Bảo hiểm",
        },
        {
          id: "4.6",
          title: "Phụ tùng & dầu chính hãng",
          children: [
            {
              id: "4.6.1",
              title: "Phụ tùng",
            },
            {
              id: "4.6.2",
              title: "Lốp xe",
            },
            {
              id: "4.6.3",
              title: "Dầu động cơ",
            },
            {
              id: "4.6.4",
              title: "Sản phẩm chăm sóc xe",
            },
          ],
        },
        {
          id: "4.7",
          title: "Phong cách sống Mercedes",
          children: [
            {
              id: "4.7.1",
              title: "Phụ kiện cho xe",
            },
            {
              id: "4.7.2",
              title: "Bộ sưu tập Mercedes-Benz",
            },
          ],
        },
        {
          title: "Bản tin kỹ thuật",
        },
      ],
    },
    {
      id: 5,
      title: "Thế giới Mercedes-Benz",
    },
  ];

  function handleOverlay() {
    setSelectedData([]);
    setSelected(null);
  }

  function HandleOnMenu() {
    setHidden((prev) => !prev);
  }

  function HandleClickMenu(item) {
    if (JSON.stringify(item.children) === JSON.stringify(selectedData)) {
      setSelectedData([]);
      setSelected(null);
    } else if (item.children && item.children.length > 0) {
      setPrevMenu(selectedData);
      setSelectedData(item.children);
      setSelected({});
    }
  }
  function HandleClickPrev() {
    if (prevMenu.length > 0) {
      setSelectedData(prevMenu);
    }
  }
  return (
    <div className={clsx(styles.header)}>
      <div className={clsx(styles.headerTop)}>
        <span className={clsx(styles.logoName)}>
          <img src={logo} />
          <Link to="/">Mercedes-Benz</Link>
        </span>
        <div className={clsx(styles.headerInput)}>
          <div className={clsx(styles.policy)}>
            {!isTablet || (
              <span onClick={HandleOnMenu}>
                <FiAlignJustify />
              </span>
            )}
            <Link to="/">Chính sách riêng tư</Link>
            <Link to="/" className={clsx(styles.language)}>
              EN
            </Link>
            <Link to="/" className={clsx(styles.language)}>
              VI
            </Link>
          </div>
          <InputSearch />
        </div>
      </div>

      {(isTablet && hidden) || !isTablet ? (
        <ul className={clsx(styles.navbar)}>
          {data.map((item) => (
            <li
              style={{ color: "white" }}
              key={item.id}
              onClick={() => HandleClickMenu(item)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      ) : null}

      <div
        style={{
          marginLeft: selectedData.length > 0 ? "0px" : "-1000px",
          transition: "margin-left  0.5s ",
        }}
        className={clsx(styles["MainNav-container"])}
      >
        <div style={{ marginLeft: "10px" }} className={clsx(styles.NavMain)}>
          <button onClick={() => HandleClickPrev(prevMenu)}>Prev</button>
          <ul>
            {selectedData.map((item) => (
              <li onClick={() => HandleClickMenu(item)} key={item.id}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {selected !== null && (
        <div onClick={handleOverlay} className={clsx(styles.overlayBody)}></div>
      )}
    </div>
  );
}

export default Header;
