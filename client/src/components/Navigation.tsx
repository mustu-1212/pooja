import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "royal" ? "classic" : "royal");
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-lg border-b border-theme-primary/10" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-playfair font-bold text-2xl text-theme-primary">
            Pooja Markam
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")} 
              className="text-gray-700 hover:text-theme-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")} 
              className="text-gray-700 hover:text-theme-primary transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-gray-700 hover:text-theme-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-gray-700 hover:text-theme-primary transition-colors"
            >
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="relative w-16 h-8 bg-theme-primary/20 rounded-full p-1 transition-colors duration-300"
            >
              <div className={`w-6 h-6 bg-theme-primary rounded-full shadow-md transform transition-transform duration-300 ${
                theme === "classic" ? "translate-x-8" : "translate-x-0"
              }`}></div>
            </button>
            <span className="text-sm text-gray-600 hidden md:block">
              {theme === "royal" ? "Royal Mode" : "Classic Mode"}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
