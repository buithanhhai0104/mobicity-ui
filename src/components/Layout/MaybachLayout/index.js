import React from "react";
import Banner from "../../Banner";
import NavPage from "../DefaultLayput/NavPage";
import videoMaybach from "../../../audio/maybach.mp4";
import h1 from "../../../image/img CleanMore/h1maybach.avif";
import h2 from "../../../image/img CleanMore/h2maybach.avif";
import h3 from "../../../image/img CleanMore/h3maybach.avif";
import LearnMore from "components/LearnMore";
import clsx from "clsx";
import styles from "../../Layout/HomeLayout/HomeLayout.module.scss";
function MaybachLayout(props) {
  const ListLearnMore = [
    {
      id: 1,
      img: h1,
      title: "Mercedes-Maybach S-Class",
      content: "Định nghĩa một tuyệt tác.",
    },
    {
      id: 2,
      img: h2,
      title: "Mercedes-Maybach GLS",
      content: "Biểu tượng độc tôn.",
    },
    {
      id: 3,
      img: h3,
      title: "Mercedes-Maybach EQS SUV",
      content: "Trải nghiệm thuần điện ở một đẳng cấp khác.",
    },
  ];
  return (
    <>
      <Banner
        video={videoMaybach}
        title={"Mercedes-Maybach"}
        content={
          "Sự tổng hòa giữa tính thẩm mỹ đương đại và không gian sang trọng bậc nhất."
        }
      />
      <NavPage activeColor={"maybach"} />
      <div className={clsx(styles.container)}>
        <h2 className={clsx(styles.LearnTitle)}>Các mẫu xe Mercedes-Maybach</h2>
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

export default MaybachLayout;
