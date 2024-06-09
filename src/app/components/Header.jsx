"use client";

import React from "react";
import Image from "next/image";

import logo from "@/public/logo.svg?url";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="w-full xs:px-8 lg:px-20 py-6 flex items-center lg:fixed xs:absolute z-10">
      <Link to="hero-section" spy={true} smooth={true} duration={500}>
        <Image src={logo} alt="p-logo" width={32} />
      </Link>
    </div>
  );
};

export default Header;
