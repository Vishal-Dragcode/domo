import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Microscope, Dna, Brain, BarChart3, Beaker, ShieldCheck } from "lucide-react";

import advancedLabsImg from "../assets/advanced-labs.jpg";
import genomicsImg from "../assets/genomics.jpg";
import aiDrivenImg from "../assets/ai-driven.jpg";
import clinicalTrialsImg from "../assets/clinical-trials.jpg";
import fermentationImg from "../assets/fermentation.jpg";
import ipPatentsImg from "../assets/ip-patents.jpg";

const capabilities = [
  { 
    icon: Microscope, 
    title: "Reduce Waste", 
    desc: "Optimized biotechnology solutions that minimize waste generation and improve process efficiency across industries.",
    bgImage: advancedLabsImg
  },
  { 
    icon: Dna, 
    title: "Reuse Resources", 
    desc: "Innovative formulations designed to enable reuse of materials and by-products, supporting sustainable operations.",
    bgImage: genomicsImg
  },
  { 
    icon: Brain, 
    title: "Recycle Processes", 
    desc: "Advanced processing techniques that support recycling and reduce environmental impact in production systems.",
    bgImage: aiDrivenImg
  },
  { 
    icon: BarChart3, 
    title: "Sustainable Growth", 
    desc: "Helping businesses grow responsibly by improving efficiency, reducing costs, and maintaining eco-friendly practices.",
    bgImage: clinicalTrialsImg
  },
  { 
    icon: Beaker, 
    title: "Efficient Production", 
    desc: "Cost-effective and scalable production solutions ensuring consistent quality with minimal environmental impact.",
    bgImage: fermentationImg
  },
  { 
    icon: ShieldCheck, 
    title: "Quality & Trust", 
    desc: "Committed to delivering reliable products with a focus on safety, performance, and customer satisfaction.",
    bgImage: ipPatentsImg
  },
];

const Research = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const smoothEase = [0.25, 0.1, 0.25, 1];

  return (
    <section id="research" className="py-10 bg-muted/50 relative overflow-hidden" ref={ref}>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,100,0,0.03)_1px,_transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-4 relative z-10 py-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: smoothEase }}
            className="text-sm font-semibold uppercase tracking-wider text-primary inline-block px-4 py-1.5 rounded-full bg-primary/10"
          >
            Sustainability Focus
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: smoothEase }}
            className="text-4xl md:text-4xl lg:text-4xl font-display font-bold mt-5 text-foreground"
          >
            Building a 
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Sustainable Future</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.7, ease: smoothEase }}
            className="text-muted-foreground mt-5 max-w-2xl mx-auto text-lg"
          >
            We focus on Reduce, Reuse, and Recycle principles to deliver eco-friendly biotechnology solutions that support sustainable business growth.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="relative overflow-hidden py-8">
          <motion.div
            className="flex gap-6 md:gap-8 items-stretch"
            initial={{ x: "-50%" }}
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          >
            {[...capabilities, ...capabilities].map((c, i) => (
              <motion.div
                key={`${c.title}-${i}`}
                onMouseEnter={() => setActiveIndex(i % capabilities.length)}
                onMouseLeave={() => setActiveIndex(null)}
                className="flex-shrink-0 w-[320px] md:w-[380px] min-h-[380px] bg-transparent border border-slate-800/80 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl relative overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: (i % capabilities.length) * 0.1, ease: smoothEase }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                {/* Background */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={c.bgImage} 
                    alt={c.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center gap-5">
                  <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30">
                    <c.icon className="w-10 h-10 text-emerald-400" />
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-xl md:text-2xl">{c.title}</h4>
                    <p className="text-sm text-white/80 mt-2 max-w-[280px]">{c.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.3 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-muted-foreground tracking-wide uppercase">
            Reduce • Reuse • Recycle
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Research;