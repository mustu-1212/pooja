import { motion } from "framer-motion";
import { heroImage } from "@/lib/images";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 gradient-overlay opacity-90"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-theme-accent/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-theme-accent/30 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-theme-accent/25 rounded-full animate-float" style={{ animationDelay: "4s" }}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-shadow">
              <span className="block">Pooja</span>
              <span className="block text-theme-accent">Markam</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed">
              "Inspiring hearts through music, creativity, and authentic expression. Let's collaborate and create something beautiful together."
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-theme-accent text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Collaborate
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-theme-primary transition-all duration-300"
              >
                Book Now
              </button>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a 
                href="https://instagram.com/poojamarkam308" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-theme-accent transition-colors text-2xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://youtube.com/@Poojamarkamvlog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-theme-accent transition-colors text-2xl"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <img 
                src={heroImage} 
                alt="Pooja Markam - Digital Creator and Artist" 
                className="rounded-3xl shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-all duration-700"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-theme-accent/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
