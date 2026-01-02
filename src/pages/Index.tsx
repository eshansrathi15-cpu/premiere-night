import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FilmStripTimeline from "@/components/FilmStripTimeline";
import DeHackSection from "@/components/DeHackSection";
import BedrockSection from "@/components/BedrockSection";
import EventsGrid from "@/components/EventsGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative">
      {/* Film Grain Overlay */}
      <div className="film-grain" />
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Film Strip Timeline */}
      <FilmStripTimeline />

      {/* DeHack Section */}
      <DeHackSection />

      {/* Bedrock Section */}
      <BedrockSection />

      {/* Events Grid */}
      <EventsGrid />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
