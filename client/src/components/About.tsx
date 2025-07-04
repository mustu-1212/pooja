import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutImage } from "@/lib/images";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skills = [
    {
      title: "Music & Performance",
      description: "Gondhi songs, live performances, stage presence",
      bgColor: "bg-theme-primary/5"
    },
    {
      title: "Modeling & Fashion",
      description: "Traditional & contemporary styling, photoshoots",
      bgColor: "bg-theme-accent/5"
    },
    {
      title: "Digital Creation",
      description: "Content creation, social media, influencer work",
      bgColor: "bg-theme-primary/5"
    },
    {
      title: "Brand Partnerships",
      description: "Collaborations, endorsements, sponsorships",
      bgColor: "bg-theme-accent/5"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* About Content */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-theme-primary mb-8">
              About Me
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                I'm Pooja Markam, a passionate <span className="text-theme-primary font-semibold">digital creator</span> and <span className="text-theme-primary font-semibold">Gondhi song artist</span> who believes in the power of authentic expression and creative storytelling.
              </p>
              
              <p>
                As an <span className="text-theme-primary font-semibold">influencer</span> and <span className="text-theme-primary font-semibold">model</span>, I specialize in creating meaningful connections with audiences through various creative mediums. My work spans across music, modeling, and brand collaborations.
              </p>
              
              <p>
                I'm available for <span className="text-theme-accent font-semibold">collaborations</span>, <span className="text-theme-accent font-semibold">sponsorships</span>, and <span className="text-theme-accent font-semibold">brand endorsements</span> that align with my values of creativity, authenticity, and positive impact.
              </p>
            </div>
            
            {/* Skills */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-4 ${skill.bgColor} rounded-lg`}
                >
                  <h4 className="font-semibold text-theme-primary mb-2">{skill.title}</h4>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* About Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Artistic portrait capturing Pooja's creative personality and style" 
                className="w-full h-96 object-cover"
              />
              
              {/* Decorative overlays */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-theme-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-theme-primary/20 rounded-full blur-xl"></div>
            </div>
            
            {/* Floating quote card */}
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-sm">
              <p className="text-theme-primary font-playfair text-lg italic">
                "Creating authentic connections through art and expression"
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
