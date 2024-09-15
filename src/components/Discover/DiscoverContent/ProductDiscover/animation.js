import React, { useContext, useEffect, useState } from "react";
import { ProductImgContext } from "components/Context/ProductImgContext";

const CarImage3D = () => {
  // lấy dữ liệu hình truyền từ home/amg/maybach layout
  const Product = useContext(ProductImgContext);
  // Lây mãng img từ object Product
  const images = Product.img;
  // tạo state để lưu trữ
  const [activeImg, setActive] = useState(images[0]);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    // tạo mãng timers để return clearTimeout trành rò rĩ bộ nhớ trong khi sử dụng useEffect
    let timers = [];
    // logic hoạt động
    if (hover) {
      for (let i = 0; i < images.length; i++) {
        let timer = setTimeout(() => {
          setActive(images[i]);
        }, i * 20);
        timers.push(timer);
      }
    } else {
      for (let i = images.length - 1; i >= 0; i--) {
        let timer = setTimeout(() => {
          setActive(images[i]);
        }, (images.length - 1 - i) * 20);
        timers.push(timer);
      }
    }

    // clearTimout để xóa setTimeout tránh gò rì bộ nhớ
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [hover, images]);

  // hàm để set Hover
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <img
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      src={activeImg}
      alt="Car"
    />
  );
};

export default CarImage3D;
