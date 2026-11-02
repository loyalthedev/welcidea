import About from "@/components/landing/About";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import ImpactShowcase from "@/components/landing/ImpactShowcase";
import LegacyCTA from "@/components/landing/LegacyCTA";
import Navbar from "@/components/landing/Navbar";
import Pillars from "@/components/landing/Pillars";
import Roster from "@/components/landing/Roster";
import SectionDivider from "@/components/landing/SectionDivider";
import Stats from "@/components/landing/Stats";
import Team from "@/components/landing/Team";
import Works from "@/components/landing/Works";

export default function Landing() {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />
      <main className='overflow-hidden'>
        <Hero />
        <Pillars />
        <Stats />
        <SectionDivider />
        <About />
        <SectionDivider />
        <ImpactShowcase />
        <SectionDivider />
        <Roster />
        <SectionDivider />
        <Team />
        <SectionDivider />
        <Works />
        <SectionDivider />
        <LegacyCTA />
      </main>
      <Footer />
    </div>
  );
}
