import { motion } from "framer-motion";
import heroBg from "@/assets/image2.jpg";

const DNAHelix = () => (
  <svg
    viewBox="0 0 200 600"
    className="absolute right-0 top-0 h-full w-48 opacity-10 hidden lg:block"
  >
    {Array.from({ length: 20 }).map((_, i) => {
      const y = i * 30;
      const x1 = 60 + Math.sin(i * 0.5) * 40;
      const x2 = 140 - Math.sin(i * 0.5) * 40;
      return (
        <g key={i}>
          <circle cx={x1} cy={y} r="4" fill="hsl(150 70% 19%)" />
          <circle cx={x2} cy={y} r="4" fill="hsl(150 60% 30%)" />
          {i % 2 === 0 && (
            <line
              x1={x1}
              y1={y}
              x2={x2}
              y2={y}
              stroke="hsl(150 70% 19%)"
              strokeWidth="1.5"
              opacity="0.3"
            />
          )}
        </g>
      );
    })}
  </svg>
);

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Biotech laboratory"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <DNAHelix />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-16 md:pt-20 lg:pt-24 pb-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/20 text-secondary border border-primary/30 mb-6">
              Leading Sustainable Biotech Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-3"
            style={{ color: "hsl(0 0% 100%)" }}
          >
            Reduce More. Reuse Smarter. Recycle Better.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl leading-relaxed"
            style={{ color: "hsl(0 0% 95%)" }}
          >
            Committed to quality and sustainability, we provide biotechnology
            solutions that create lasting value and build strong customer
            relationships.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollTo("products")}
              className="gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-base hover:opacity-90 transition-all shadow-brand w-full sm:w-auto"
            >
              Explore Products
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3 rounded-lg font-semibold text-base border-2 transition-all hover:bg-secondary/10 w-full sm:w-auto"
              style={{
                color: "hsl(0 0% 100%)",
                borderColor: "hsl(0 0% 100% / 0.3)",
              }}
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating molecules */}
      <div className="absolute bottom-20 right-20 hidden lg:block">
        <div className="w-4 h-4 rounded-full bg-primary/30 animate-float" />
        <div className="w-3 h-3 rounded-full bg-primary-glow/20 animate-float-delayed ml-12 mt-8" />
        <div className="w-2 h-2 rounded-full bg-secondary/40 animate-float ml-6 mt-4" />
      </div>
    </section>
  );
};

export default Hero;
