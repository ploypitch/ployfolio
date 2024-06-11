"use client";
import React from "react";

import Layout from "@/components/layout";

const VerMe = () => {
  return (
    <Layout isLandingPage={false}>
      <div className="bg-gray h-full overflow-hidden flex justify-center w-full">
        <div className="xs:px-6 xl:px-40 py-28 flex flex-col xs:w-full xl:w-[1200px]">
          <p className="text-h1 text-dark mb-16">VerME</p>
          Coming soon...
        </div>
      </div>
    </Layout>
  );
};

export default VerMe;
