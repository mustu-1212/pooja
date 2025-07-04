import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Highlight from "@/components/Highlight";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";

export default function Home() {
  const handleImageClick = (image: any) => {
    const event = new CustomEvent('openLightbox', { detail: image });
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <Portfolio onImageClick={handleImageClick} />
      <About />
      <Highlight />
      <Contact />
      <Footer />
      <Lightbox />
    </div>
  );
}
