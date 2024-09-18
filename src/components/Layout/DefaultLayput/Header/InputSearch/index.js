import React, { useState, useRef, useEffect } from "react";
import { VscSearch } from "react-icons/vsc";
import styles from "../header.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import useMediaQueries from "Hook/useMediaQueries";

function InputSearch() {
  const inputRef = useRef(null);
  const [length, setLength] = useState("200px");
  const [overlay, setOverlay] = useState(false);
  const [hiddenInput, setHiddenInput] = useState(false);
  const { isTablet } = useMediaQueries();

  let timeoutId = useRef(null);
  function handleInputFocus() {
    setLength("600px");
    setOverlay(true);
  }

  function handleInputBlur() {
    setLength("150px");
    setOverlay(false);
    if (isTablet) {
      setHiddenInput(false);
    }
  }

  function handleIconClick() {
    if (isTablet) {
      setHiddenInput(true);
      // forcus khi click vào icon
      timeoutId.current = setTimeout(() => {
        inputRef.current.focus();
      }, 0);
    }
  }

  // dọn timeout
  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return (
    <div>
      {overlay && <div className={clsx(styles.overlay)}></div>}
      <div className={styles.headerSearch}>
        {(!isTablet || hiddenInput) && (
          <input
            ref={inputRef}
            placeholder="Từ khóa tìm kiếm"
            style={{ width: length }}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            type="text"
          />
        )}
        <Link onClick={handleIconClick}>
          <VscSearch />
        </Link>
      </div>
    </div>
  );
}

export default InputSearch;
