import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart } from "lucide-react";
import aboutImg from "@/assets/about-lab.jpg";

const values = [
  { 
    icon: Target, 
    title: "Our Mission", 
    text: "To provide high-quality and sustainable biotechnology solutions that help industries grow responsibly while ensuring environmental safety and efficiency." 
  },
  { 
    icon: Eye, 
    title: "Our Vision", 
    text: "To become a trusted leader in biotechnology by delivering innovative, eco-friendly, and reliable products across multiple industries." 
  },
  { 
    icon: Heart, 
    title: "Our Values", 
    text: "We believe in sustainability, customer satisfaction, quality assurance, and continuous innovation in all our products and services." 
  },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  
  const card1InView = useInView(card1Ref, { once: true, margin: "-20px", amount: 0.1 });
  const card2InView = useInView(card2Ref, { once: true, margin: "-20px", amount: 0.1 });
  const card3InView = useInView(card3Ref, { once: true, margin: "-20px", amount: 0.1 });

  const cardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Building Sustainable Biotech Solutions
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-brand">
              <img src={aboutImg} alt="Our team at work" className="w-full h-auto object-cover" width={800} height={600} loading="lazy" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              PRAVI Biotech Private Ltd
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              PRAVI Biotech is focused on delivering innovative and sustainable biotechnology solutions for modern industries. Our products are designed to improve efficiency, safety, and environmental performance across multiple sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong commitment to the principle of “Reduce, Reuse, Recycle,” we aim to support businesses in building a sustainable future while maintaining the highest standards of quality and customer satisfaction.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            ref={card1Ref}
            variants={cardVariants}
            initial="hidden"
            animate={card1InView ? "visible" : "hidden"}
            whileHover={{ 
              y: -10,
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
          >
            <motion.div 
              whileHover={{ 
                scale: 1.2,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              className="gradient-primary w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:shadow-lg"
            >
              <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}>
                <Target className="w-7 h-7 text-primary-foreground group-hover:text-green-400 transition-colors duration-200" />
              </motion.div>
            </motion.div>
            <motion.h4 whileHover={{ x: 5, transition: { duration: 0.15 } }} className="text-xl font-bold text-foreground mb-2 group-hover:text-green-600 transition-colors duration-200">
              Our Mission
            </motion.h4>
            <motion.p className="text-muted-foreground text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
              To provide high-quality and sustainable biotechnology solutions that help industries grow responsibly while ensuring environmental safety and efficiency.
            </motion.p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            ref={card2Ref}
            variants={cardVariants}
            initial="hidden"
            animate={card2InView ? "visible" : "hidden"}
            whileHover={{ 
              y: -10,
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
          >
            <motion.div 
              whileHover={{ scale: 1.2, rotate: 5, transition: { duration: 0.2 } }}
              className="gradient-primary w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:shadow-lg"
            >
              <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}>
                <Eye className="w-7 h-7 text-primary-foreground group-hover:text-green-400 transition-colors duration-200" />
              </motion.div>
            </motion.div>
            <motion.h4 whileHover={{ x: 5 }} className="text-xl font-bold text-foreground mb-2 group-hover:text-green-600 transition-colors duration-200">
              Our Vision
            </motion.h4>
            <motion.p className="text-muted-foreground text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
              To become a trusted leader in biotechnology by delivering innovative, eco-friendly, and reliable products across multiple industries.
            </motion.p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            ref={card3Ref}
            variants={cardVariants}
            initial="hidden"
            animate={card3InView ? "visible" : "hidden"}
            whileHover={{ 
              y: -10,
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
          >
            <motion.div 
              whileHover={{ scale: 1.2, rotate: 5, transition: { duration: 0.2 } }}
              className="gradient-primary w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:shadow-lg"
            >
              <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}>
                <Heart className="w-7 h-7 text-primary-foreground group-hover:text-green-400 transition-colors duration-200" />
              </motion.div>
            </motion.div>
            <motion.h4 whileHover={{ x: 5 }} className="text-xl font-bold text-foreground mb-2 group-hover:text-green-600 transition-colors duration-200">
              Our Values
            </motion.h4>
            <motion.p className="text-muted-foreground text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
              We believe in sustainability, customer satisfaction, quality assurance, and continuous innovation in all our products and services.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;