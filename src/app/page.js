import Image from "next/image";

import HeroSection from "./sections/HeroSection";
import MySkill from "./sections/MySkill";
import Experiences from "./sections/Experiences";
import SeeMore from "./sections/SeeMore";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <MySkill />
      <Experiences />
      <SeeMore />
    </main>
  );
}
