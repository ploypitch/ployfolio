import Image from "next/image";

import HeroSection from "./components/HeroSection";
import MySkill from "./components/MySkill";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MySkill />
    </main>
  );
}
