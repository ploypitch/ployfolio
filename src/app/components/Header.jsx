"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.svg?url";
import { Link as Scroll } from "react-scroll";

const Header = ({ isLandingPage }) => {
  return (
    <div className="w-full xs:px-8 lg:px-20 py-6 flex items-center lg:fixed xs:absolute z-10">
      {isLandingPage ? (
        <Scroll to="hero-section" spy={true} smooth={true} duration={500}>
          <Image src={logo} alt="p-logo" width={32} />
        </Scroll>
      ) : (
        <Link href="/">
          <Image src={logo} alt="p-logo" width={32} />
        </Link>
      )}
    </div>
  );
};

export default Header;
