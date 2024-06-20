"use client";

import React, { useState, useEffect } from "react";

import ChevronLeft from "@/public/chevron_left.svg";
import ChevronRight from "@/public/chevron_right.svg";

const ImageSlider = ({
  images = [],
  autoSlide = false,
  autoSlideInterval = 5000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <div className="flex items-center xs:gap-1 md:gap-4">
        <button
          onClick={prev}
          className="p-0.5 rounded-full shadow bg-dark-400 opacity-30 text-gray-800 hover:opacity-80"
        >
          <ChevronLeft fill="white" />
        </button>
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform ease-out duration-500 xs:w-[80vw] xl:w-[1200px]"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {images?.map((item, index) => (
              <img
                key={index}
                src={item?.src}
                width={"auto"}
                height={"auto"}
                alt={`wf-${index + 1}`}
              />
            ))}
          </div>
        </div>
        <button
          onClick={next}
          className="p-0.5 rounded-full shadow bg-dark-400 opacity-30 text-gray-800 hover:opacity-80"
        >
          <ChevronRight fill="white" />
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 mt-6">
        {images.map((_, i) => (
          <div
            key={i}
            className={`
              transition-all w-3 h-3 bg-dark-400 cursor-pointer rounded-full
              ${curr === i ? "opacity-80" : "opacity-30"}
            `}
            onClick={() => setCurr(i)}
          />
        ))}
      </div>
    </>
  );
};

export default ImageSlider;
