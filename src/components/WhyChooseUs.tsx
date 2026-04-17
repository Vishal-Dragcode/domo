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
        style={{
          position: "relative",
          maxWidth: "1400px",
          height: "auto",
          minHeight: "550px",
          margin: "0 auto",
          borderRadius: "32px",
          overflow: "hidden",
          boxShadow: "0 30px 60px rgba(0,0,0,0.15)"
        }}
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #f0f9ff, #e0f2fe, #bae6fd)",
            clipPath: "polygon(0 0, 60% 0, 40% 100%, 0% 100%)",
            zIndex: 2
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at 20% 40%, rgba(34,197,94,0.05) 0%, transparent 60%)",
              pointerEvents: "none"
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "60px 50px",
              maxWidth: "550px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 style={{ 
                color: "#22c55e", 
                fontSize: "42px", 
                fontWeight: 800,
                fontFamily: "'Syne', sans-serif",
                marginBottom: "16px"
              }}>
                Why Choose Us?
              </h2>

              <p style={{ color: "#1a2b3e", marginBottom: "40px", lineHeight: 1.6, fontSize: "15px", opacity: 0.85 }}>
                Driven by quality, sustainability, and customer trust.
              </p>
            </motion.div>

            <div>
              {corePillars.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  whileHover={{ x: 10 }}
                  style={{
                    marginBottom: "20px",
                    cursor: "pointer"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <div style={{ fontSize: "28px" }}>{item.icon}</div>
                    <div>
                      <h4 style={{ 
                        color: "#1a2b3e", 
                        marginBottom: "4px",
                        fontSize: "16px",
                        fontWeight: 700
                      }}>{item.title}</h4>
                      <p style={{ fontSize: "13px", color: "#4a5b6e", lineHeight: 1.4 }}>
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
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #134e5e, #1a7b6b, #22c55e)",
            clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)",
            zIndex: 1
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at 80% 30%, rgba(255,255,255,0.12) 0%, transparent 70%)",
              pointerEvents: "none"
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "60px 50px",
              marginLeft: "auto",
              maxWidth: "520px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{ textAlign: "right" }}
            >
              <h2 style={{ 
                color: "#ffffff", 
                fontSize: "42px", 
                fontWeight: 800,
                fontFamily: "'Syne', sans-serif",
                marginBottom: "16px"
              }}>
                Our Commitment to <span style={{ borderBottom: "3px solid #ffffff" }}>Excellence</span>
              </h2>

              <p style={{ color: "#ffffff", marginBottom: "40px", lineHeight: 1.6, fontSize: "15px", opacity: 0.95 }}>
                Focused on sustainability, innovation, and delivering value-driven biotech solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{ display: "flex", gap: "30px", justifyContent: "flex-end", flexWrap: "wrap" }}
            >
              {globalFeatures.map((item, i) => (
                <motion.div key={i} whileHover={{ scale: 1.1 }} style={{ textAlign: "center" }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.0 + i * 0.1 }}
                    style={{
                      color: "#ffffff",
                      fontWeight: 800,
                      fontSize: "32px",
                      fontFamily: "'Syne', sans-serif"
                    }}
                  >
                    {item.metric}
                  </motion.div>
                  <div style={{ fontSize: "13px", color: "#ffffff", marginTop: "6px", opacity: 0.9 }}>
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              style={{
                marginTop: "40px",
                textAlign: "right"
              }}
            >
              <p style={{ color: "#ffffff", fontSize: "13px", fontWeight: 500, opacity: 0.9 }}>
                ✓ Customer satisfaction is our core value
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "32px",
            border: "1px solid rgba(0,0,0,0.08)",
            pointerEvents: "none",
            zIndex: 3
          }}
        />
      </motion.div>
    </motion.section>
  );
};

export default WhyChooseUs;