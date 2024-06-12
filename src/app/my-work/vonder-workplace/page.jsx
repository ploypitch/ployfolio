"use client";
import React from "react";

import Layout from "@/components/layout";
import BackButton from "@/app/components/back-button";

const VonderWorkplace = () => {
  return (
    <Layout isLandingPage={false}>
      <div className="bg-gray h-full overflow-hidden flex justify-center w-full">
        <BackButton />
        <div className="xs:px-6 xl:px-40 py-28 flex flex-col xs:w-full xl:w-[1200px]">
          <p className="text-h1 text-dark mb-16">Vonder Workplace</p>
          Coming soon...
        </div>
      </div>
    </Layout>
  );
};

export default VonderWorkplace;
