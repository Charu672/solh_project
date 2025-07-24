import Stats from "@/components/Stats";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TrustedBy from "@/components/TrustedBy";
import VideoSection from "@/components/VideoSection";
import Features from "@/components/Features";
import BuiltForWorkplace from "@/components/BuiltForWorkplace";
import AboutSolhApp from "@/components/AboutSolhApp";
import StreffieSection from "@/components/StreffieSection";
import ImpactSection from "@/components/ImpactSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Stats />
      <VideoSection />
      <Features />
      <BuiltForWorkplace/>
      <AboutSolhApp/>
      <StreffieSection/>
      <ImpactSection/>
      <ContactSection/>
      <Footer/>
    </main>
  );
}
