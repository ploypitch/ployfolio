"use client";

import React from "react";
import Image from "next/image";

import image_exp from "@/public/image_exp.png"

const Experiences = () => {
  return (
    <section>
      <div className="bg-secondary min-h-dvh h-full flex justify-center w-full overflow-hidden">
        <div className="xs:px-6 lg:px-40 md:px-16 py-8 flex items-center justify-between xl:w-[1500px]">
          <div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-10">
            <div>
              <p className="text-h1 text-primary">Over the years,</p>
              <p className="text-body-1 text-white mt-6">
                my journey in front-end development began during my third year
                of college when I interned and discovered the wonders of HTML,
                CSS, and JavaScript. The excitement of seeing my code come to
                life ignited a passion for creating user-friendly web
                interfaces, and I immersed myself in learning these
                technologies.
              </p>
              <p className="text-body-1 text-white mt-4">
                After graduation, I started my first job as a front-end web
                developer at{" "}
                <a
                  className="text-white hover:text-primary text-body-1 cursor-pointer font-semibold"
                  href="https://www.existing.co/"
                  target="_blank"
                >
                  The Existing Company
                </a>
                , where I joined a start-up team to develop a product called
                &quot;VerME&quot;. Here, I first explored React.js and later
                transitioned to Next.js, which allowed me to create dynamic and
                efficient web applications. The experience was both challenging
                and rewarding as I saw &quot;VerME&quot; evolve from an idea to
                a fully functional product.
              </p>
              <p className="text-body-1 text-white mt-4">
                My journey continued at{" "}
                <a
                  className="text-white hover:text-primary text-body-1 cursor-pointer font-semibold"
                  href="https://www.vonder.co.th/for-workplace"
                  target="_blank"
                >
                  Vonder (Thailand) Company
                </a>
                , where I took on the role of a front-end web developer. At
                Vonder, I developed new features for the company&apos;s HRD/HRM
                product using React.js, which was adopted by over 80 companies.
                This role further honed my skills and deepened my passion for
                front-end development, as I saw the significant impact of my
                work on numerous organizations.
              </p>
            </div>

            <div className="relative w-full flex items-center justify-center">
              <Image
                src={image_exp}
                sizes="(max-width: 767px) 100%, (min-width: 768px) 70%, 70%"
                alt="img_exp"
                className="lg:ml-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
