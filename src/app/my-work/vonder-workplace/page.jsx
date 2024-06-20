"use client";
import React from "react";

import MyWorkLayout from "@/components/mywork-layout";
import ImageSlider from "@/components/image-slider";

import { images } from "../../constances/vonder-wf";

const VonderWorkplace = () => {
  return (
    <MyWorkLayout project="Vonder Workplace">
      <ImageSlider images={images} autoSlide />
    </MyWorkLayout>
  );
};

export default VonderWorkplace;
