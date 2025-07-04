// Import uploaded images
import image1 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_90e0d230_1751606856465.jpg";
import image2 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_95f9d2a6_1751606856466.jpg";
import image3 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_145fdeb6_1751606856466.jpg";
import image4 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_660bc936_1751606856466.jpg";
import image5 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_54f7eecf_1751606866906.jpg";
import image6 from "@assets/WhatsApp Image 2025-07-03 at 18.02.38_7a3d4e2e_1751606871530.jpg";

export interface PortfolioImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
}

export const portfolioImages: PortfolioImage[] = [
  {
    src: image1,
    alt: "Elegant portrait showcasing traditional Indian attire with intricate embroidery",
    title: "Traditional Elegance",
    description: "Modeling Portfolio",
    category: "modeling"
  },
  {
    src: image2,
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
  }
];

export const heroImage = image1;
export const aboutImage = image4;
export const featuredImage1 = image2;
export const featuredImage2 = image6;
