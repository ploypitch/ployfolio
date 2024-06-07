import Image from "next/image";

import HeroSection from "./sections/HeroSection";
import MySkill from "./sections/MySkill";
import Experiences from "./sections/Experiences";
import SeeMore from "./sections/SeeMore";
import NavBar from "./components/NavBar";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <MySkill />
        <Experiences />
        <SeeMore />
        <Footer />
      </main>
    </>
  );
}
