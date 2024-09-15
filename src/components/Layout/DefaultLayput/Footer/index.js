import clsx from "clsx";
import React, { useEffect, useCallback } from "react";
import styles from "./Footer.module.scss";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { TiSocialInstagram } from "react-icons/ti";
import { CiLinkedin } from "react-icons/ci";
function Footer() {
  const HandleTotheTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <footer className={clsx(styles["footer-container"])}>
        <div className={clsx(styles["footer-upPage"])}>
          <button onClick={HandleTotheTop}>
            <FaChevronUp />
            <span>Lên trên</span>
          </button>
        </div>
        <div className={clsx(styles["footer-newletter"])}>
          <div style={{ padding: "32px 0px", display: "flex" }}>
            <div className={clsx(styles["footer-newletter--content"])}>
              <h5>Kết nối với Mercedes-Benz</h5>
              <p>
                Hãy giữ kết nối và nhận ngay quà tặng chính hãng để nâng tầm
                trải nghiệm dịch vụ.
              </p>
            </div>
            <div className={clsx(styles["footer-newletter--link"])}>
              <Link>Đăng ký và nhận quà tặng</Link>
            </div>
          </div>
        </div>
        <ul className={clsx(styles["footer-siteMap"])}>
          <li className={clsx(styles["footer-section"])}>
            <button>Các Dòng Xe</button>
            <div className={clsx(styles["footer-siteMap-list"])}>
              <ul>
                <li>
                  <span>
                    <Link>Xe thuần điện EQ</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Sedan</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>SUV</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Cabriolet và Roadster</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Mercedes-AMG</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Mercedes-Maybach</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Xe đa dụng</Link>
                  </span>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button>Mua xe</button>
            <div className={clsx(styles["footer-siteMap-list"])}>
              <ul>
                <li>
                  <span>
                    <Link>Ưu đãi mới nhất</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Tìm xe mới</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Tìm xe đã qua sử dụng</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Bảng giá & Brochure</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Cấu hình xe</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Khối doanh nghiệp & Khách hàng ưu tiên</Link>
                  </span>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button>Tư vấn mua xe</button>
            <div className={clsx(styles["footer-siteMap-list"])}>
              <ul>
                <li>
                  <span>
                    <Link>Yêu cầu tư vấn</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Đăng ký lái thử</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Tìm nhà phân phối gần nhất</Link>
                  </span>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button>Dịch vụ</button>
            <div className={clsx(styles["footer-siteMap-list"])}>
              <ul>
                <li>
                  <span>
                    <Link>Ưu đãi dịch vụ</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Đặt hẹn dịch vụ</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Hướng dẫn sử dụng dành cho chủ sở hữu xe</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Phụ kiện chính hãng</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Bộ sưu tập Mercedes-Benz</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Triệu hồi</Link>
                  </span>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button>Khám phá Mercerdes</button>
            <div className={clsx(styles["footer-siteMap-list"])}>
              <ul>
                <li>
                  <span>
                    <Link>Câu chuyện của chúng tôi</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Liên hệ</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <Link>Quyền riêng tư</Link>
                  </span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className={clsx(styles["footer-lower"])}>
          <ul className={clsx(styles["footer-lower-legal"])}>
            <li>
              <span>
                <Link>Bản quyền nội dung</Link>
              </span>
            </li>
            <li>
              <span>
                <Link>Cài đặt</Link>
              </span>
            </li>
            <li>
              <span>
                <Link>Quyền riêng tư và bảo vệ dữ liệu</Link>
              </span>
            </li>
            <li>
              <span>
                <Link>Thông tin pháp lý</Link>
              </span>
            </li>
          </ul>
          <ul className={clsx(styles["footer-lower-social"])}>
            <li>
              <Link>
                <FaFacebookSquare />
              </Link>
            </li>
            <li>
              <Link>
                <IoLogoYoutube />
              </Link>
            </li>
            <li>
              <Link>
                <TiSocialInstagram />
              </Link>
            </li>
            <li>
              <Link>
                <CiLinkedin />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
