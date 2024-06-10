"use client";

import React from "react";
import Layout from "@/components/layout";
import WorkCard from "@/components/work-card";

import { MyWorkList } from "../constances/my-work";

export default function page() {
  return (
    <Layout isLandingPage={false}>
      <div className="bg-gray h-full overflow-hidden flex justify-center w-full">
        <div className="xs:px-6 xl:px-40 py-28 flex flex-col xs:w-full xl:w-[1200px]">
          <p className="text-h1 text-dark mb-16">My Work</p>
          <div className="flex flex-col gap-6">
            {MyWorkList.map((item, index) => (
              <div key={`work-${index + 1}`}>
                <WorkCard
                  imageSrc={item?.imageSrc}
                  label={item.label}
                  desc={item.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
