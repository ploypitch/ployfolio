import Image from "next/image";

import HeroSection from "./sections/HeroSection";
import MySkill from "./sections/MySkill";
import Experiences from "./sections/Experiences";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MySkill />
      <Experiences />
    </main>
  );
}
