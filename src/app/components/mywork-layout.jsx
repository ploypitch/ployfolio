import React from "react";

import Layout from "./layout";
import BackButton from "./back-button";

const MyWorkLayout = ({ project = "Vonder Workplace", children }) => {
  return (
    <>
      <Layout isLandingPage={false}>
        <div className="bg-gray h-full overflow-hidden flex justify-center w-full">
          <BackButton />
          <div className="xs:px-6 xl:px-40 py-28 flex flex-col xs:w-full items-center">
            <p className="xs:text-h1-mb md:text-h1 text-dark mb-16">{project}</p>
            {children}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MyWorkLayout;
