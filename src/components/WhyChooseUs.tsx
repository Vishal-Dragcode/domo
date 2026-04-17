import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-100px" });

  const corePillars = [
    { 
      title: "CUSTOMER SATISFACTION", 
      desc: "Delivering trust, value, and long-term relationships through reliable biotech solutions.", 
      icon: "🤝" 
    },
    { 
      title: "QUALITY ASSURANCE", 
      desc: "Strict quality control and certified processes ensuring consistent product excellence.", 
      icon: "🛡️" 
    },
    { 
      title: "SUSTAINABLE PRACTICES", 
      desc: "Focused on reduce, reuse, and recycle to minimize environmental impact.", 
      icon: "🌱" 
    },
    { 
      title: "SCIENTIFIC INNOVATION", 
      desc: "Continuous research-driven development to deliver advanced biotech solutions.", 
      icon: "🔬" 
    }
  ];

  const globalFeatures = [
    { metric: "100%", label: "Quality Focused" },
    { metric: "Eco", label: "Friendly Approach" },
    { metric: "Trusted", label: "Solutions" },
  ];

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #e6f4ea, #d1f2eb)",
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden"
      }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative max-w-[1400px] mx-auto rounded-[32px] overflow-hidden shadow-2xl flex flex-col lg:block min-h-auto lg:min-h-[600px]"
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative lg:absolute lg:inset-0 z-[2] bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#bae6fd] lg:[clip-path:polygon(0_0,60%_0,40%_100%,0%_100%)]"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 20% 40%, rgba(34,197,94,0.05) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-[2] px-6 py-12 md:px-12 lg:px-[50px] lg:py-0 lg:max-w-[550px] h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#22c55e] mb-4 font-display">
                Why Choose Us?
              </h2>

              <p className="text-[#1a2b3e] mb-8 text-sm md:text-base leading-relaxed opacity-85">
                Driven by quality, sustainability, and customer trust.
              </p>
            </motion.div>

            <div className="space-y-5">
              {corePillars.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl md:text-3xl">{item.icon}</div>
                    <div>
                      <h4 className="text-[#1a2b3e] text-base md:text-lg font-bold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-[#4a5b6e] leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative lg:absolute lg:inset-0 z-[1] bg-gradient-to-br from-[#134e5e] via-[#1a7b6b] to-[#22c55e] lg:[clip-path:polygon(60%_0,100%_0,100%_100%,40%_100%)]"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 80% 30%, rgba(255,255,255,0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-[2] px-6 py-12 md:px-12 lg:px-[50px] lg:py-0 lg:ml-auto lg:max-w-[520px] h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center lg:text-right"
            >
              <h2 className="text-2xl md:text-4xl lg:text-[42px] font-extrabold text-white mb-4 font-display">
                Our Commitment to <span className="border-b-4 border-white">Excellence</span>
              </h2>

              <p className="text-white mb-10 text-sm md:text-base leading-relaxed opacity-95">
                Focused on sustainability, innovation, and delivering value-driven biotech solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex gap-6 md:gap-8 justify-center lg:justify-end flex-wrap"
            >
              {globalFeatures.map((item, i) => (
                <motion.div key={i} whileHover={{ scale: 1.1 }} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.0 + i * 0.1 }}
                    className="text-white font-extrabold text-2xl md:text-4xl font-display"
                  >
                    {item.metric}
                  </motion.div>
                  <div className="text-xs md:text-sm text-white mt-1 opacity-90">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-10 text-center lg:text-right"
            >
              <p className="text-white text-xs md:text-sm font-medium opacity-90">
                ✓ Customer satisfaction is our core value
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute inset-0 rounded-[32px] border border-black/5 pointer-events-none z-[3]"
        />
      </motion.div>
    </motion.section>
  );
};

export default WhyChooseUs;