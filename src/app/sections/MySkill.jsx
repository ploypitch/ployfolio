"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";

import antdIcon from "@/public/skills/antd.png";
import cssIcon from "@/public/skills/css.png";
import emotionIcon from "@/public/skills/emotion.png";
import figmaIcon from "@/public/skills/figma.png";
import gitIcon from "@/public/skills/git.png";
import htmlIcon from "@/public/skills/html.png";
import javascriptIcon from "@/public/skills/javascript.png";
import nextIcon from "@/public/skills/next.png";
import reactIcon from "@/public/skills/react.png";
import styledComponentIcon from "@/public/skills/styled-component.png";
import tailwindIcon from "@/public/skills/tailwind.png";
import typescriptIcon from "@/public/skills/typescript.png";

import bgVector1 from "@/public/bg_vector_1.svg";
import bgVector2 from "@/public/bg_vector_2.svg";
import bgVector3 from "@/public/bg_vector_3.svg";

const Divider = styled.div`
  width: 2px;
  height: 32px;
  border-radius: 24px;
`;

const MySkill = () => {
  const skillsArr = [
    {
      title: "Languages",
      iconSrc: [javascriptIcon, typescriptIcon, htmlIcon, cssIcon],
    },
    {
      title: "Libraries and Frameworks",
      iconSrc: [
        reactIcon,
        nextIcon,
        antdIcon,
        tailwindIcon,
        styledComponentIcon,
        emotionIcon,
      ],
    },
    {
      title: "Tools",
      iconSrc: [figmaIcon, gitIcon],
    },
  ];

  return (
    <section>
      <div className="bg-gray h-dvh relative">
        <div className="absolute left-2/4 mt-[20dvh] flex items-center overflow-hidden">
          <Image src={bgVector1} alt="bg-vector-1" className="mr-[150px]" />
          <Image src={bgVector2} alt="bg-vector-2" />
        </div>
        <Image
          src={bgVector3}
          alt="bg-vector-3"
          className="absolute left-3/4 bottom-0 mb-[20dvh] overflow-hidden"
        />
        <div className="px-40 flex flex-col justify-center h-full">
          <div className="w-6/12">
            <h1 className="text-secondary">My Skills</h1>
            <p className="my-6 text-secondary">
              I excel in HTML, CSS, and JavaScript, creating sleek,
              user-friendly interfaces. Skilled in Ant and React, I craft
              dynamic web experiences with ease.
            </p>
          </div>
          <div className="flex flex-row">
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
                      />
                    </div>
                  ))}
                  {index < skillsArr.length - 1 && (
                    <Divider className="bg-neutral-400 ml-2 mr-6" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkill;
