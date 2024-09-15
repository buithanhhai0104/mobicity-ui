import React from "react";
import styleMaybach from "../MaybachLayout/Maybachlayout.module.scss";
import Banner from "../../Banner";
import NavPage from "../DefaultLayput/NavPage";
import videoMaybach from "../../../audio/maybach.mp4";
import h1 from "../../../image/img CleanMore/h1maybach.avif";
import h2 from "../../../image/img CleanMore/h2maybach.avif";
import h3 from "../../../image/img CleanMore/h3maybach.avif";
import LearnMore from "components/LearnMore";
import clsx from "clsx";
import styles from "../../Layout/HomeLayout/HomeLayout.module.scss";
import { TitleContext } from "components/Context/TitleContext";
import Discover from "components/Discover";
import ListItem from "components/List";
import DiscoverContent, {
  dataProduct,
} from "components/Discover/DiscoverContent";
import { ProductImgContext } from "components/Context/ProductImgContext";
import Service from "components/Service";
import Introduce from "components/Introduce";
import imgIntroduce from "../../../image/img Introduce/maybach img.avif";
// icon
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";
import { FaCar } from "react-icons/fa";
import { SiMercedes } from "react-icons/si";
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
  const DiscoverMaybach = {
    title:
      "Sự hoàn mỹ tạo nên những tuyệt tác vượt thời gian: Mercedes-Maybach",
    ColorTitle: "black",
  };
  const maybachProduct = dataProduct.filter((obj) => "Maybach" in obj);

  const maybachIntroduce = {
    title: "Mercedes-Maybach",
    content1:
      "Kế thừa di sản trăm năm từ thương hiệu xe lừng danh, Mercedes-Maybach tái định nghĩa chuẩn mực thượng lưu: sự tự do bất tận. Tất cả những gì bạn cần làm là bước lên xe và tận hưởng không gian nội thất sang trọng bậc nhất, trải nghiệm sự kết hợp tuyệt vời giữa cải tiến công nghệ đỉnh cao và từng chi tiết được hoàn thiện tỉ mỉ.",

    linkName: "Tìm hiểu thêm",
    img: imgIntroduce,
  };

  const maybachList = [
    {
      id: 1,
      title: "Cửa hang trực tuyến Online Showroom",
      content: "Tìm xe có sẵn trên toàn quốc",
      firstIcon: <MdOutlineLocalGroceryStore />,
      lastIcon: <GrFormNextLink />,
    },
    {
      id: 2,
      title: "Thiết kế cấu hình xe",
      content: "Khám phá thiết kế theo nhu cầu cá nhân",
      firstIcon: <FaCar />,
      lastIcon: <GrFormNextLink />,
    },

    {
      id: 4,
      title: "Nhà phân phối chính hãng",
      content: "Tìm và liên hệ NPP để được tư vấn chi tiết",
      firstIcon: <SiMercedes />,
      lastIcon: <GrFormNextLink />,
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
      <div className={clsx(styleMaybach["container-discover-maybach"])}>
        <div className={clsx(styleMaybach["discover-item"])}>
          <TitleContext.Provider value={DiscoverMaybach}>
            <Discover />
          </TitleContext.Provider>
          <div className={clsx(styleMaybach["discover-item-content"])}>
            {maybachProduct.map((item) => {
              return (
                <div
                  className={clsx(styleMaybach["Discover-item--maybach"])}
                  key={item.id}
                >
                  <ProductImgContext.Provider
                    value={{ img: item.img, name: item.name }}
                  >
                    <DiscoverContent />
                  </ProductImgContext.Provider>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={clsx(styleMaybach["maybach-service-container"])}>
        <h2>Dịch vụ</h2>
        <Service />
      </div>
      <div className={clsx(styleMaybach["maybach-introduce-container"])}>
        <Introduce
          title={maybachIntroduce.title}
          img={maybachIntroduce.img}
          content1={maybachIntroduce.content1}
          content2={maybachIntroduce.content2}
          linkName={maybachIntroduce.linkName}
        />
      </div>
      <div style={{ margin: "50px 100px" }}>
        <ul className={clsx(styleMaybach["home-list-container"])}>
          {maybachList.map((item) => {
            return (
              <li key={item.id}>
                <ListItem
                  title={item.title}
                  content={item.content}
                  firstIcon={item.firstIcon}
                  lastIcon={item.lastIcon}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default MaybachLayout;
