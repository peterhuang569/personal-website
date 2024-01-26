import Image from "next/image";
import { HeroSection } from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
export default function Home() {
  return (
    <>
      <div className="bg-black">
        <main className="container mx-auto py-12 px-4">
          <HeroSection />
          <AboutSection />
        </main>
      </div>

      <div className="bg-white">
        <div className="container mx-auto py-12 px-4">
          <ProjectSection />
        </div>
      </div>
    </>
  );
}