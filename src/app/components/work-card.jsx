"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'

const WorkCard = ({
  imageSrc,
  label = "Label",
  desc = "React.js, Antd, Cypress",
  project = "vonder-project",
}) => {
  const router = useRouter();

  return (
    <div
      className="w-full xs:h-32 md:h-[164px] xs:p-3 md:p-4 bg-card-bg border rounded-2xl border-card-border flex gap-4 cursor-pointer"
      onClick={() => router.push(`/my-work/${project}`)}
    >
      <div className="xs:w-[104px] md:w-[250px]">
        <Image
          src={imageSrc}
          alt="cover"
          width={"auto"}
          height={"auto"}
          className="rounded-2xl object-cover xs:h-[104px] md:h-[132px]"
        />
      </div>
      <div className="flex flex-col justify-center h-full">
        <p className="xs:text-h3-mb md:text-h3 text-dark">{label}</p>
        <p className="xs:text-body-2-mb md:text-body-2 text-dark-gray">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
