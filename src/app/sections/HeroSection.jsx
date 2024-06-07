"use client";

import React from "react";
import Image from "next/image";
import avatarBg from "@/public/avatar-bg.svg?url";
import avatar from "@/public/avatar.png";
import styled from "styled-components";

const AvatarBg = styled(Image)`
  max-width: 576px;

  @media only screen and (max-width: 767px) {
    max-width: 374px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 428px;
  }
`;

const Avatar = styled(Image)`
  max-width: 446px;
  position: absolute;
  top: -37px;
  right: 24px;

  @media only screen and (max-width: 767px) {
    max-width: 266px;
    top: 47%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 320px;
    top: -16px;
  }
`;

const ImageProfile = () => {
  return (
    <>
      <AvatarBg
        src={avatarBg}
        width={"auto"}
        height={"auto"}
        alt="avatar-bg-svg"
        priority={false}
      />

      <Avatar
        src={avatar}
        width={"auto"}
        height={"auto"}
        alt="avatar-ploy"
        priority={false}
      />
    </>
  );
};

const HeroSection = () => {
  return (
    <section>
      <div className="md:bg-gradient-section xs:bg-secondary xs:min-h-full md:h-full">
        <div className="xs:px-6 xs:pt-32 xs:pb-6 md:pb-16 lg:px-40 md:px-16 md:pt-40 flex items-center xl:justify-center md:gap-8 xs:flex-col md:flex-row overflow-hidden">
          <div className="md:max-w-[36dvw] h-full">
            <p className="xs:text-h2-mb md:text-h2 text-primary">
              Hi, my name is
            </p>
            <p className="xs:text-h1-mb md:text-h1 text-primary">
              Pitchapa Pawong.
            </p>
            <p className="xs:text-body-1-mb md:text-body-1 text-white mt-4">
              A front-end developer with over 4 years of professional
              experience, specializing in React.js to deliver excellent user
              experiences.
            </p>

            <div className="md:mt-[70px] xs:mt-6 flex justify-between gap-6">
              <p className="xs:text-body-2-mb md:text-body-2 text-primary">
                Highly skilled at progressive enhancement, design systems & UI
                Engineering.
              </p>
              <p className="xs:text-body-2-mb md:text-body-2 text-primary">
                Highly skilled at progressive enhancement, design systems & UI
                Engineering.
              </p>
            </div>
          </div>
          <div className="relative xs:hidden md:flex">
            <ImageProfile />
          </div>
        </div>
        <div className="md:hidden xs:bg-primary-400 min-w-full h-[340px] py-10 relative overflow-hidden">
          <ImageProfile />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
