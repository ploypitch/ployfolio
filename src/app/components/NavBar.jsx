"use client";

import React from "react";
import Image from "next/image";

import logo from "@/public/logo.svg?url";

const NavBar = () => {
  return (
    <nav className="w-full px-20 py-6 flex items-center fixed z-10">
      <Image src={logo} alt="p-logo" />
    </nav>
  );
};

export default NavBar;
