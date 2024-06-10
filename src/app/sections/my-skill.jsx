"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";

import bgVector1 from "@/public/bg_vector_1.svg?url";
import bgVector2 from "@/public/bg_vector_2.svg?url";
import bgVector3 from "@/public/bg_vector_3.svg?url";

import { skillsArr } from "../constances/my-skill";

const Divider = styled.div`
  width: 2px;
  height: 32px;
  border-radius: 24px;
`;

const MySkill = () => {

  return (
    <section>
      <div className="bg-gray h-dvh relative overflow-hidden flex justify-center w-full">
        <div className="absolute left-2/4 mt-[20dvh] items-center xs:hidden md:flex">
          <Image src={bgVector1} alt="bg-vector-1" className="mr-[150px]" />
          <Image src={bgVector2} alt="bg-vector-2" />
        </div>
        <Image
          src={bgVector3}
          alt="bg-vector-3"
          className="absolute left-3/4 bottom-0 mb-[20dvh] xs:hidden md:flex"
        />
        <div className="xs:px-6 lg:px-40 md:px-16 xl:w-[1500px]">
          <div className="flex flex-col justify-center h-full">
            <div className="lg:w-6/12">
              <p className="text-h1 text-secondary">My Skills</p>
              <p className="my-6 text-secondary">
                I excel in HTML, CSS, and JavaScript, creating sleek,
                user-friendly interfaces. Skilled in Ant and React, I craft
                dynamic web experiences with ease.
              </p>
            </div>
            <div className="flex xs:flex-col md:flex-row xs:gap-2 md:gap-0">
              {skillsArr.map((skills, index) => (
                <div key={`group-${index + 1}`}>
                  <p className="text-label text-gray">{skills.title}</p>
                  <div className="flex items-center mt-3">
                    {skills.iconSrc.map((skill, indexes) => (
                      <div
                        key={`${skills.title}-${indexes + 1}`}
                        className="mr-4 "
                      >
                        <Image
                          src={skill}
                          alt={`${skills.title}-${indexes + 1}`}
                          className="xs:w-8 md:w-12"
                        />
                      </div>
                    ))}
                    {index < skillsArr.length - 1 && (
                      <div className="xs:hidden md:flex">
                        <Divider className="bg-neutral-400 ml-2 mr-6" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkill;
