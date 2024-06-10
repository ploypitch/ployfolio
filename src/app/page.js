"use client";

import React from "react";
import HeroSection from "./sections/hero-section";
import MySkill from "./sections/my-skill";
import Experiences from "./sections/experiences";
import SeeMore from "./sections/see-more";
import Layout from "@/app/components/layout";

import { Element } from "react-scroll";

export default function Home() {
  return (
    <Layout isLandingPage={true}>
      <Element name="hero-section" id="hero">
        <HeroSection />
      </Element>
      <Element name="my-skill" id="skill">
        <MySkill />
      </Element>
      <Element name="experience" id="exp">
        <Experiences />
      </Element>
      <Element name="see-more" id="more">
        <SeeMore />
      </Element>
    </Layout>
  );
}
