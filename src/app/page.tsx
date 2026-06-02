import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestProjects from "@/components/LatestProjects";
import SkillsAndEducation from "@/components/SkillsAndEducation";
import Studio from "@/components/Studio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LatestProjects />
        <SkillsAndEducation />
        <Studio />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
