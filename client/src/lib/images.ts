// Import uploaded images
import image1 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_90e0d230_1751606856465.jpg";
import image2 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_95f9d2a6_1751606856466.jpg";
import image3 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_145fdeb6_1751606856466.jpg";
import image4 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_660bc936_1751606856466.jpg";
import image5 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_54f7eecf_1751606866906.jpg";
import image6 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_7a3d4e2e_1751606871530.jpg";

// Additional new images
import image7 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_9d60dd27_1751622204582.jpg";
import image8 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_701e744a_1751622218658.jpg";
import image9 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_777bbb5a_1751622218658.jpg";
import image10 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_871abdfe_1751622218658.jpg";
import image11 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_1217e66d_1751622218659.jpg";
import image12 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_03115c82_1751622218659.jpg";
import image13 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_7589e066_1751622218659.jpg";
import image14 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_45088e98_1751622218660.jpg";
import image15 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_07824103_1751622218660.jpg";

// New hero image
import newHeroImage from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_701e744a_1751622410875.jpg";

// New modern ethnic image
import newModernEthnicImage from "@assets/new.jpg";

export interface PortfolioImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
}

export const portfolioImages: PortfolioImage[] = [
  {
    src: newModernEthnicImage,
    alt: "Stylish portrait with modern ethnic wear and traditional accessories",
    title: "Modern Ethnic",
    description: "Fashion Portfolio",
    category: "modeling"
  },
  {
    src: image3,
    alt: "Casual outdoor lifestyle portrait in natural setting",
    title: "Natural Beauty",
    description: "Lifestyle Shoot",
    category: "modeling"
  },
  {
    src: image4,
    alt: "Golden hour portrait with luxurious traditional outfit and jewelry",
    title: "Golden Hour",
    description: "Glamour Portfolio",
    category: "modeling"
  },
  {
    src: image5,
    alt: "Professional headshot with natural lighting and warm tones",
    title: "Professional",
    description: "Headshot Portfolio",
    category: "modeling"
  },
  {
    src: image6,
    alt: "Artistic road trip photo capturing free-spirited creative energy",
    title: "Creative Journey",
    description: "Music & Creativity",
    category: "music"
  },
  {
    src: image7,
    alt: "Stunning traditional wear with silver jewelry and elegant styling",
    title: "Silver Glamour",
    description: "Traditional Modeling",
    category: "modeling"
  },
  {
    src: image8,
    alt: "Contemporary ethnic wear with beautiful paisley patterns",
    title: "Contemporary Grace",
    description: "Fashion Collaboration",
    category: "collabs"
  },
  {
    src: image9,
    alt: "Elegant black evening dress with sophisticated styling",
    title: "Evening Elegance",
    description: "Formal Wear Portfolio",
    category: "modeling"
  },
  {
    src: image10,
    alt: "Bright outdoor shoot with temple architecture backdrop",
    title: "Cultural Heritage",
    description: "Location Shoot",
    category: "modeling"
  },
  {
    src: image11,
    alt: "Festive celebration portrait in colorful traditional venue",
    title: "Celebration Moments",
    description: "Event Photography",
    category: "music"
  },
  {
    src: image12,
    alt: "Casual contemporary portrait with peace sign gesture",
    title: "Youthful Spirit",
    description: "Lifestyle Portfolio",
    category: "modeling"
  },
  {
    src: image13,
    alt: "Vintage blue gingham dress with charming retro styling",
    title: "Retro Chic",
    description: "Fashion Shoot",
    category: "modeling"
  },
  {
    src: newModernEthnicImage,
    alt: "Luxury brand collaboration featuring elegant styling and premium fashion",
    title: "Luxury Brand Collaboration",
    description: "Brand Partnership",
    category: "collabs"
  },
  {
    src: image15,
    alt: "Romantic white dress with pink flowers in artistic setting",
    title: "Romantic Bloom",
    description: "Creative Portrait",
    category: "modeling"
  },
  {
    src: image1,
    alt: "Previous hero image - Elegant portrait showcasing traditional Indian attire",
    title: "Heritage Beauty",
    description: "Traditional Portfolio",
    category: "modeling"
  }
];

export const heroImage = newHeroImage;
export const aboutImage = image4;
export const featuredImage1 = image2;
export const featuredImage2 = image6;
