"use client";

import React from "react";

import { FooterContent } from "../constances/footer-content";

const Footer = ({ isLandingPage = true }) => {
  return (
    <div className={"bg-dark-400 h-full flex justify-center items-center w-full py-16 " + `${isLandingPage ? "min-h-dvh": "min-h-[60dvh]"}`}>
      <div className="xs:px-6 lg:px-40 md:px-16 xl:w-[1500px] xs:w-full">
        <div className="grid xs:grid-cols-1 sm:grid-cols-3">
          {FooterContent.map((footer, index) => (
            <div key={`footer-${index + 1}`}>
              <p className="text-gray opacity-50 text-body-1 mb-4 xs:mt-8 sm:mt-0">
                {footer.title}
              </p>
              {footer.children.map((item, indexes) => (
                <div
                  className="flex flex-col gap-2"
                  key={`footer-${index + 1}-${indexes + 1}`}
                >
                  <a
                    href={item.href}
                    className="text-white text-body-1-mb opacity-80"
                    target={item.target}
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
        <hr className="mt-28 border-white opacity-20" />
        <div className="flex justify-center mt-12">
          <span className="text-white opacity-30">© 2024 Ployfolio by </span>
          <span className="text-white opacity-80">Pitchapa Pawong </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
