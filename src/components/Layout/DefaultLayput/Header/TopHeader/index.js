import styles from "../header.module.scss";
import logo from "../../../../../image/logo/logo3.png";
import { Link } from "react-router-dom";
import clsx from "clsx";
import InputSearch from "./InputSearch";
import { FiAlignJustify } from "react-icons/fi";
import useMediaQueries from "Hook/useMediaQueries";

function TopHeader() {
  const { isDesktop, isTablet, isMobile } = useMediaQueries();

  return (
    <>
      <div className={clsx(styles.headerTop)}>
        <span className={clsx(styles.logoName)}>
          <img src={logo} />
          <Link to="/">Mercedes-Benz</Link>
        </span>
        <div className={clsx(styles.headerInput)}>
          <div className={clsx(styles.policy)}>
            {!isTablet || (
              <span>
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
    </>
  );
}

export default TopHeader;
