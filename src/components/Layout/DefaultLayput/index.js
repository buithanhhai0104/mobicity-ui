import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import Test1 from "./Header/text1";
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <Test1 />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}
export default DefaultLayout;
