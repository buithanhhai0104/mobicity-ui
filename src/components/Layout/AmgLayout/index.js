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
import Discover from "components/Discover";
import { TitleContext } from "components/Context/TitleContext";
import ListItem from "components/List";
import DiscoverContent, {
  dataProduct,
} from "components/Discover/DiscoverContent";
import { ProductImgContext } from "components/Context/ProductImgContext";
import styleAmg from "../AmgLayout/AmgLayout.module.scss";
import Service from "components/Service";
import imgIntroduce1 from "../../../image/img Introduce/Amg img1.webp";
import imgIntroduce2 from "../../../image/img Introduce/amg img2.jpg";
import Introduce from "components/Introduce";
// import icon
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";
import { FaCar } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { SiMercedes } from "react-icons/si";
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

  const DiscoverAmg = {
    title: "Tốc độ đến từ tinh thần thể thao phóng khoáng: Mercedes-AMG",
    ColorTitle: "white",
  };
  const amgProduct = dataProduct.filter((obj) => "Amg" in obj);

  const amgIntroduce = [
    {
      id: 1,
      title: "Thế giới Mercedes-AMG",
      content1: "Giấc mơ của những trái tim đam mê hiệu suất.",

      linkName: "Khám phá thế giới tốc độ",
      img: imgIntroduce1,
      reverseImage: false,
    },
    {
      id: 2,
      title: "Công nghệ hệ động lực E PERFORMANCE",
      content1:
        "E PERFORMANCE là thành quả của sự hợp tác giữa nhóm xe thể thao Mercedes-AMG và đội đua F1 Mercedes với mục đích chuyển giao các công nghệ tân tiến trên xe đua F1 sang những dòng xe đường phố.",

      linkName: "Khám phá ngay",
      img: imgIntroduce2,
      reverseImage: true,
    },
  ];
  const colorAmg = true;

  const amgList = [
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
      id: 3,
      title: "Đăng ký lái thử ",
      content: "Trực tiếp trải nghiệm mẫu xe yêu thích",
      firstIcon: <GiSteeringWheel />,
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
        video={videoAmg}
        title={"Mercedes-AMG C-Class"}
        content={"Chơi, rồi thay đổi cuộc chơi"}
      />
      <NavPage activeColor={"amg"} />
      <div className={clsx(styles.container)}>
        <h2 className={clsx(styleAmg.LearnTitle)}>Các mẫu xe Mercedes-AMG</h2>
        <ul className={clsx(styles.LearnContainer)}>
          {ListLearnMore.map((item) => (
            <li key={item.id}>
              <LearnMore
                image={item.img}
                title={item.title}
                content={item.content}
                carSearch={item.carSearch}
                colorAmg={colorAmg}
              />
              <div style={{ paddingBottom: "20px" }}></div>
            </li>
          ))}
        </ul>
      </div>
      <div className={clsx(styleAmg["container-discover-amg"])}>
        <div className={clsx(styleAmg["discover-item"])}>
          <TitleContext.Provider value={DiscoverAmg}>
            <Discover />
          </TitleContext.Provider>
          <div className={clsx(styleAmg["discover-item-content"])}>
            {amgProduct.map((item) => {
              return (
                <div
                  className={clsx(styleAmg["Discover-item--amg"])}
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
      <div style={{ backgroundColor: "black" }}>
        <div className={clsx(styleAmg["amg-service-container"])}>
          <h2>Dịch vụ</h2>
          <Service />
        </div>
      </div>
      <div className={clsx(styleAmg["amg-introduce-container"])}>
        {amgIntroduce.map((item) => {
          return (
            <div className={clsx(styleAmg[`introduce${item.id}`])}>
              <Introduce
                title={item.title}
                img={item.img}
                content1={item.content1}
                linkName={item.linkName}
                reverseImage={item.reverseImage}
              />
            </div>
          );
        })}
      </div>
      <div style={{ margin: "50px 100px", paddingBottom: "50px" }}>
        <ul className={clsx(styleAmg["amg-list-container"])}>
          {amgList.map((item) => {
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

export default AmgLayout;
