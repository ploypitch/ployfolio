"use client";

import React from "react";
import Image from "next/image";
import avatarBg from "@/public/avatar-bg.svg";
import avatar from "@/public/avatar.png";

const HeroSection = () => {
  return (
    <section>
      <div className="bg-gradient-section min-h-[80dvh]">
        <div className="px-40 pt-40 flex items-center">
          <div className="max-w-[36dvw] h-full">
            <h2 className="text-primary">Hi, my name is</h2>
            <h1 className="text-primary">Pitchapa Pawong.</h1>
            <p className="text-body-1 text-white mt-4">
              A front-end developer with over 4 years of professional
              experience, specializing in React.js to deliver excellent user
              experiences. 
            </p>
          </div>
          <div className="relative">
            <Image
              src={avatarBg}
              width={576}
              height={446}
              alt="avatar-bg-svg"
            />
            <Image
              src={avatar}
              width={446}
              height={446}
              alt="avatar-ploy"
              style={{
                position: "absolute",
                top: 0,
                marginTop: "-37px",
                marginLeft: "104px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
