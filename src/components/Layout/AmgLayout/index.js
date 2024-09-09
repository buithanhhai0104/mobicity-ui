import React from "react";
import Banner from "../../Banner";
import videoAmg from "../../../audio/Amg.mp4";
import NavPage from "../DefaultLayput/NavPage";
import h1 from "image/img CleanMore/h1AMG.webp";
import h2 from "image/img CleanMore/h2AMG.avif";
import h3 from "image/img CleanMore/h3AMG.avif";
import LearnMore from "components/LearnMore";
import clsx from "clsx";
import styles from "../../Layout/HomeLayout/HomeLayout.module.scss";
function AmgLayout() {
  const ListLearnMore = [
    {
      id: 1,
      img: h1,
      title: "Mercedes-AMG G-Class",
      content: "Thủ lĩnh off-roader.",
    },
    {
      id: 2,
      img: h2,
      title: "Mercedes-AMG SL Roadster",
      content: "Tâm điểm cuộc chơi hiệu suất.",
      carSearch: "Tìm xe có sẵn",
    },
    {
      id: 3,
      img: h3,
      title: "Mercedes-AMG GT 53 4MATIC+",
      content: "Cuốn theo tốc độ và Hút mọi ánh nhìn.",
      carSearch: "Tìm xe có sẵn",
    },
  ];
  return (
    <>
      <Banner
        video={videoAmg}
        title={"Mercedes-AMG C-Class"}
        content={"Chơi, rồi thây đổi cuộc chơi"}
      />
      <NavPage activeColor={"amg"} />
      <div className={clsx(styles.container)}>
        <h2 className={clsx(styles.LearnTitle)}>Các mẫu xe Mercedes-AMG</h2>
        <ul className={clsx(styles.LearnContainer)}>
          {ListLearnMore.map((item) => {
            return (
              <li key={item.id}>
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

export default AmgLayout;
