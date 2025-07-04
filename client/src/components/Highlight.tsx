import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { featuredImage1, featuredImage2 } from "@/lib/images";

export default function Highlight() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const features = [
    {
      image: featuredImage1,
      title: "Luxury Brand Collaboration",
      description: "High-end fashion partnership showcasing elegant traditional wear",
      alt: "Featured luxury collaboration showcasing high-end fashion and styling"
    },
    {
      image: featuredImage2,
      title: "Music & Performance",
      description: "Gondhi song performances and cultural artistic expressions",
      alt: "Featured music performance or artistic creative project"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-theme-primary/5 to-theme-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-theme-primary mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Highlighting some of my most impactful creative collaborations and projects
          </p>
        </div>
        
        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src={feature.image}
                alt={feature.alt}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-theme-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="font-playfair text-3xl font-bold mb-2">{feature.title}</h3>
                <p className="text-lg opacity-90">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
