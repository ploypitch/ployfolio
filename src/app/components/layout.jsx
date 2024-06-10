import React from "react";

import Header from "./header";
import Footer from "../sections/footer";
import { Element } from "react-scroll";

const Layout = ({ children, isLandingPage }) => {
  return (
    <>
      <Header isLandingPage={isLandingPage} />
      {children}
      <Element name="footer" id="foot">
        <Footer isLandingPage={isLandingPage} />
      </Element>
    </>
  );
};

export default Layout;
