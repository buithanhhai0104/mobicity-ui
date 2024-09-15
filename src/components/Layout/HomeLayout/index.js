import React from "react";
import styles from "./HomeLayout.module.scss";
import Banner from "../../Banner";
import videoHome from "audio/0908.mp4";
import NavPage from "../DefaultLayput/NavPage";
import LearnMore from "../../LearnMore";
import Discover from "components/Discover";
import ListItem from "components/List";
import DiscoverContent, {
  dataProduct,
} from "components/Discover/DiscoverContent";
import Service from "components/Service";
import Introduce from "components/Introduce";
import clsx from "clsx";

// import ảnh của CleanMore
import h1 from "image/img CleanMore/h1.jpg";
import h2 from "image/img CleanMore/h2.avif";
import h3 from "image/img CleanMore/h3.webp";
import h4 from "image/img CleanMore/h4.avif";
import h5 from "image/img CleanMore/h5.avif";
// import ảnh của introduce
import imgintroduce from "../../../image/img Introduce/home img.avif";

// import Context
import { TitleContext } from "../../Context/TitleContext";
import { ProductImgContext } from "components/Context/ProductImgContext";

// import icon
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";
import { FaCar } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { SiMercedes } from "react-icons/si";
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
  const DiscoverHome = {
    title:
      "Sự kết hợp hoàn hảo giữa sự sang trọng, tính thể thao và hiệu suất: Khám phá các mẫu xe mới nhất của chúng tôi",
    electricCar: "Khám phá tất cả mẫu xe điện",
    ColorTitle: "black",
  };

  const homeProduct = dataProduct.filter((obj) => "Home" in obj);

  const homeIntroduce = {
    title: "DEFINING CLASS since 1886.",
    content1:
      "Định nghĩa về xe luôn thay đổi, nhưng đẳng cấp thì không. Khi đó là Mercedes-Benz.",
    content2: "VỊ THẾ VƯỢT THỜI GIAN từ 1886",
    linkName: "Tìm hiểu thêm",
    img: imgintroduce,
  };

  const homeList = [
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
      <div className={clsx(styles["container-discover-home"])}>
        <div className={clsx(styles["discover-item"])}>
          <TitleContext.Provider value={DiscoverHome}>
            <Discover colortitle={"black"} />
          </TitleContext.Provider>
          <div className={clsx(styles["discover-item-content"])}>
            {homeProduct.map((item) => {
              return (
                <div
                  className={clsx(styles["Discover-item--home"])}
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
      <div className={clsx(styles["home-service-container"])}>
        <h2>Dịch vụ</h2>
        <Service />
      </div>
      <div className={clsx(styles["home-introduce-container"])}>
        <Introduce
          title={homeIntroduce.title}
          img={homeIntroduce.img}
          content1={homeIntroduce.content1}
          content2={homeIntroduce.content2}
          linkName={homeIntroduce.linkName}
        />
      </div>
      <div style={{ margin: "50px 100px" }}>
        <ul className={clsx(styles["home-list-container"])}>
          {homeList.map((item) => {
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

export default HomeLayout;
