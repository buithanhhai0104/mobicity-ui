import styles from "./Banner.module.scss";
import clsx from "clsx";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Banner({ video, title, content }) {
  const videoRef = useRef(null);
  const [status, setStatus] = useState("pause");

  // hàm chạy video khi vừa render ra giao diện
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      setStatus("pause");
    }
  }, []);

  // hàm chạy và dừng khi nhấn nút
  function handlePlay() {
    if (videoRef.current) {
      if (status === "pause") {
        videoRef.current.pause();
        setStatus("play");
      } else {
        videoRef.current.play();
        setStatus("pause");
      }
    }
  }

  // hàm phát lại video
  function handleVideoEnd() {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  return (
    <div className={clsx(styles.videoContainer)}>
      <video ref={videoRef} width="100%" muted onEnded={handleVideoEnd}>
        <source src={video} type="video/mp4" />
      </video>
      <span className={clsx(styles["banner-play"])}>
        <button onClick={handlePlay}>{status}</button>
      </span>
      <div className={clsx(styles.videoContent)}>
        <h1>{title}</h1>
        <p>{content}</p>
        <div className={clsx(styles.videoBtn)}>
          <span className={clsx(styles["videoBtn-item1"])}>
            <Link>Khám phá thêm</Link>
          </span>
          <span className={clsx(styles["videoBtn-item2"])}>
            <Link>Tìm xe có sẵn</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Banner;
