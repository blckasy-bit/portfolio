import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestProjects from "@/components/LatestProjects";
import Services from "@/components/Services";
import Studio from "@/components/Studio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CreativeDispatch from "@/components/CreativeDispatch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LatestProjects />
        <Services />
        <Studio />
        <Testimonials />
        <FAQ />
        <CreativeDispatch />
      </main>
      <Footer />
    </>
  );
}
