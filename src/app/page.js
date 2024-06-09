"use client";

import React from "react";
import HeroSection from "./sections/HeroSection";
import MySkill from "./sections/MySkill";
import Experiences from "./sections/Experiences";
import SeeMore from "./sections/SeeMore";
import Header from "./components/Header";
import Footer from "./sections/Footer";

import { Element } from "react-scroll";

export default function Home() {
  return (
    <>
      <Header />
      <main>
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
        <Element name="footer" id="foot">
          <Footer />
        </Element>
      </main>
    </>
  );
}
