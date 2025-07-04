import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: any;
}

export default function Lightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<any>(null);

  useEffect(() => {
    const handleImageClick = (event: CustomEvent) => {
      setCurrentImage(event.detail);
      setIsOpen(true);
    };

    window.addEventListener('openLightbox', handleImageClick as EventListener);
    return () => window.removeEventListener('openLightbox', handleImageClick as EventListener);
  }, []);

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  if (!currentImage) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-theme-accent text-2xl z-10 p-2"
            >
              <X size={24} />
            </button>
            
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-full rounded-lg shadow-2xl"
            />
            
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-playfair text-xl font-bold mb-1">{currentImage.title}</h3>
              <p className="text-sm opacity-90">{currentImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
