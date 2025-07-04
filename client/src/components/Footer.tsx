export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Pooja Markam</h3>
            <p className="text-gray-400 leading-relaxed">
              Digital creator, Gondhi song artist, influencer, and model creating authentic connections through art and expression.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="hover:text-theme-accent transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("portfolio")}
                  className="hover:text-theme-accent transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-theme-accent transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-theme-accent transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/poojamarkam308"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-theme-primary rounded-full flex items-center justify-center hover:bg-theme-accent transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://youtube.com/@Poojamarkamvlog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-theme-primary rounded-full flex items-center justify-center hover:bg-theme-accent transition-colors"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pooja Markam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
