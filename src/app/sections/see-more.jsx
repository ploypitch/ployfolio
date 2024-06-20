"use client";

import React from "react";
import ButtonLink from "@/components/button-link";

const SeeMore = () => {
  return (
    <section>
      <div className="bg-gray min-h-[98dvh] h-full flex justify-center w-full overflow-hidden">
        <div className="xs:px-6 md:px-10 flex items-center">
          <div className="grid lg:grid-cols-2 xs:grid-cols-1 xs:divide-x-0 lg:divide-x-2 xs:divide-y-2 lg:divide-y-0 divide-secondary-100 w-full">
            <div className="xs:px-0 xs:py-16 lg:p-[100px] lg:w-[720px] xs:w-[90dvw]">
              <p className="xs:text-h2-mb md:text-h2 text-secondary">
                I build <br /> lot of stuff{" "}
              </p>
              <p className="mt-6 mb-[72px] text-body-1 text-secondary">
                Projects and  <br /> web apps
              </p>
              <ButtonLink text="see my work" />
            </div>
            <div className="xs:px-0 xs:py-16 lg:p-[100px] lg:w-[720px] xs:w-[90dvw]">
              <p className="xs:text-h2-mb md:text-h2 text-secondary">
                More <br /> about me{" "}
              </p>
              <p className="mt-6 mb-[72px] text-body-1 text-secondary">
                See more of <br /> my detail in the resume.
              </p>
              <ButtonLink text="see my resume" path="/Pitchapa-Resume.pdf" target="_blank"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeMore;
