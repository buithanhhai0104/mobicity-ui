import React from "react";
import Banner from "../../Banner";
import videoHome from "audio/0908.mp4";
import NavPage from "../DefaultLayput/NavPage";
import LearnMore from "../../LearnMore";
import h1 from "image/img CleanMore/h1.jpg";
import h2 from "image/img CleanMore/h2.avif";
import h3 from "image/img CleanMore/h3.webp";
import h4 from "image/img CleanMore/h4.avif";
import h5 from "image/img CleanMore/h5.avif";
import clsx from "clsx";
import styles from "./HomeLayout.module.scss";
function HomeLayout() {
  const ListLearnMore = [
    {
      id: 1,
      img: h1,
      title: "Thông tin khuyến mại mới nhất từ Mercedes-Benz",
      content:
        "Tổng hợp thông tin khuyến mại từ Mercedes-Benz VIệt Nam cùng...",
    },
    {
      id: 2,
      img: h2,
      title: "Xe điện EQ từ Mercedes-Benz",
      content: "Khám phá tương lai di chuyển thuần điện.",
      carSearch: "Tìm xe có sẵn",
    },
    {
      id: 3,
      img: h3,
      title: "Mercedes-Benz C-Class",
      content: "Đây là thế giới của tôi.",
      carSearch: "Tìm xe có sẵn",
    },
    {
      id: 4,
      img: h4,
      title: "Giải pháp tối ưu dành cho doanh nghiệp ",
      content: "Quyền lợi dành cho khối doanh nghiệp & khách hàn...",
    },
    {
      id: 5,
      img: h5,
      title: "Xe đã qua sử dụng chính hãng",
      content: "Mercedes-Benz Certified.",
    },
  ];

  return (
    <>
      <Banner
        video={videoHome}
        title={"Mercedes-Benz GLC"}
        content={"Khi đỉnh cao chỉ là cuộc dạo chơi"}
      />
      <NavPage activeColor={"glc"} />
      <div className={clsx(styles.container)}>
        <h2 className={clsx(styles.LearnTitle)}>Tìm Hiểu Thêm</h2>
        <ul className={clsx(styles.LearnContainer)}>
          {ListLearnMore.map((item) => {
            return (
              <li className={clsx(styles[`item${item.id}`])} key={item.id}>
                <LearnMore
                  image={item.img}
                  title={item.title}
                  content={item.content}
                  carSearch={item.carSearch}
                />
                <div style={{ paddingBottom: "20px" }}></div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default HomeLayout;
