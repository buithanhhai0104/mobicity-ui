import React, { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import styles from "../../header.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
function InputSearch() {
  const [length, setLength] = useState("200px");
  const [overlay, setOverlay] = useState(false);
  function handleInputForcus() {
    setLength("600px");
    setOverlay(true);
  }
  function handleInputBlur() {
    setLength("150px");
    setOverlay(false);
  }
  return (
    <div>
      {overlay && <div className={clsx(styles.overlay)}></div>}
      <div className={styles.headerSearch}>
        <input
          placeholder="Từ khóa tìm kiếm"
          style={{ width: length }}
          onBlur={handleInputBlur}
          onFocus={handleInputForcus}
          type="text"
        />
        <Link>
          <VscSearch />
        </Link>
      </div>
    </div>
  );
}

export default InputSearch;
