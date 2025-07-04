import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Hello Pooja,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`;
    const mailtoLink = `mailto:95poojamarkam@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Success!",
      description: "Opening your email client..."
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-theme-primary text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-theme-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-theme-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Let's Collaborate
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to create something beautiful together? Get in touch for collaborations, partnerships, or just to say hello!
          </p>
        </motion.div>
        
        <div className="max-w-2xl mx-auto">
          {/* Glassmorphic Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glassmorphic rounded-3xl p-8 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white/90 font-medium mb-2">Your Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:ring-2 focus:ring-theme-accent backdrop-blur-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-white/90 font-medium mb-2">Email Address</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:ring-2 focus:ring-theme-accent backdrop-blur-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-white/90 font-medium mb-2">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:ring-2 focus:ring-theme-accent backdrop-blur-sm resize-none"
                placeholder="Tell me about your project or collaboration idea..."
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-theme-accent text-white py-4 font-semibold hover:bg-theme-accent/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Send Message
              <i className="fas fa-paper-plane ml-2"></i>
            </Button>
          </motion.form>
          
          {/* Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-white/80 mb-4">Or reach out directly:</p>
            <div className="flex justify-center space-x-8">
              <a
                href="mailto:95poojamarkam@gmail.com"
                className="flex items-center space-x-2 text-theme-accent hover:text-white transition-colors"
              >
                <i className="fas fa-envelope"></i>
                <span>95poojamarkam@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
