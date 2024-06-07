"use client";

import React from "react";
import Image from "next/image";

import logo from "@/public/logo.svg?url";

const NavBar = () => {
  return (
    <nav className="w-full xs:px-8 lg:px-20 py-6 flex items-center lg:fixed xs:absolute z-10">
      <Image src={logo} alt="p-logo" width={32} />
    </nav>
  );
};

export default NavBar;
