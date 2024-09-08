import React from "react";
import Banner from "../../Banner";
import videoHome from "../../../audio/0908.mp4";
import NavPage from "../DefaultLayput/NavPage";
function HomeLayout() {
  return (
    <>
      <Banner
        video={videoHome}
        title={"Mercedes-Benz GLC"}
        content={"Khi đỉnh cao chỉ là cuộc dạo chơi"}
      />
      <NavPage />
      <div style={{ height: "2000px", backgroundColor: "black" }}></div>
    </>
  );
}

export default HomeLayout;
