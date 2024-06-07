"use client";

import React from "react";
import ButtonLink from "../components/ButtonLink";

const SeeMore = () => {
  return (
    <section>
      <div className="bg-gray h-[98dvh]">
        <div className="px-10 flex items-center h-full w-full">
          <div className="grid grid-cols-2 divide-x-2 divide-secondary-100 w-full">
            <div className="p-[100px]">
              <p className="text-h2 text-secondary">
                I build <br /> lot of stuff{" "}
              </p>
              <p className="mt-6 mb-[72px] text-body-1 text-secondary">
                Projects, web apps <br /> and experimentals.
              </p>
              <ButtonLink text="see my work" />
            </div>
            <div className="p-[100px]">
              <p className="text-h2 text-secondary">
                More <br /> about me{" "}
              </p>
              <p className="mt-6 mb-[72px] text-body-1 text-secondary">
                See more of <br /> my detail in the resume.
              </p>
              <ButtonLink text="see my resume" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeMore;
