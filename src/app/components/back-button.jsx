import React from "react";

import ArrowBack from "@/public/arrow_back.svg";

const BackButton = () => {
  return (
    <a href="/my-work" className="w-[210px] cursor-pointer z-[99] absolute mt-12 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="bg-card-bg rounded-full border border-card-border px-3 py-0.5 flex gap-2 w-full h-full">
        <ArrowBack fill="var(--color-neutral-700)" />
        <span className="text-dark-gray text-xs uppercase">
          back to my work
        </span>
      </div>
    </a>
  );
};

export default BackButton;
