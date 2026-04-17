import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FlaskConical, Leaf, Pill, Atom, ArrowRight } from "lucide-react";

const products = [
  {
    icon: FlaskConical,
    title: "PRAVI BOOST E",
    desc: "Advanced enzyme-based solution designed to improve efficiency and productivity in industrial and agricultural applications.",
    features: ["Enhances performance", "Eco-friendly", "High efficiency"],
    gradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
  },
  {
    icon: Leaf,
    title: "PRAVISAFE R & L",
    desc: "Reliable safety solution focused on maintaining hygiene, protection, and quality standards across industries.",
    features: ["Safe to use", "Quality assurance", "Reliable protection"],
    gradient: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",
  },
  {
    icon: Pill,
    title: "PRAVIFRESH E",
    desc: "Specialized formulation to maintain freshness and extend shelf life in food and processing applications.",
    features: ["Improves freshness", "Extends shelf life", "Food-grade safe"],
    gradient: "linear-gradient(135deg, #A8E6CF 0%, #3B8D99 100%)",
  },
  {
    icon: Atom,
    title: "PRAVIFEED E",
    desc: "Efficient feed additive designed to enhance digestion, absorption, and overall animal productivity.",
    features: ["Better digestion", "Improved nutrition", "High performance"],
    gradient: "linear-gradient(135deg, #FFD93D 0%, #FF6B6B 100%)",
  },
  {
    icon: FlaskConical,
    title: "PRAVIMASS",
    desc: "Growth-supporting formulation that helps improve yield and overall production efficiency.",
    features: ["Boosts growth", "High yield support", "Consistent results"],
    gradient: "linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)",
  },
  {
    icon: Leaf,
    title: "PRAVI DEFOAMER",
    desc: "Effective defoaming agent used to control foam in industrial and processing operations.",
    features: ["Foam control", "Stable performance", "Industrial grade"],
    gradient: "linear-gradient(135deg, #00C9FF 0%, #92FE9D 100%)",
  },
  {
    icon: Pill,
    title: "PRAVI JUICE B",
    desc: "Specialized solution for juice and beverage processing to improve clarity and quality.",
    features: ["Improves clarity", "Enhances quality", "Processing efficiency"],
    gradient: "linear-gradient(135deg, #F7971E 0%, #FFD200 100%)",
  },
  {
    icon: Atom,
    title: "PRAVI ECO SOLUTIONS",
    desc: "Eco-friendly biotechnology solutions for sustainability, waste reduction, and efficient industrial processing.",
    features: [
      "Reduce • Reuse • Recycle",
      "Environment friendly",
      "Cost effective",
    ],
    gradient: "linear-gradient(135deg, #00B09B 0%, #96C93D 100%)",
  },
];

const Products = () => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const inView = useInView(ref, {
    once: false,
    margin: "-50px",
    amount: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setHasAnimated(true);
      const timer = setTimeout(() => {
        setHasAnimated(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="products"
      className="py-10 overflow-hidden"
      ref={ref}
      style={{ backgroundColor: "#0a2f1f" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-green-400">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-white">
            Sustainable Biotech Products
          </h2>
          <p className="text-green-100 mt-4 max-w-2xl mx-auto">
            Explore our range of innovative products designed to support
            efficiency, quality, and sustainability across industries.
          </p>
        </motion.div>

        <motion.div
          key={inView ? "visible" : "hidden"}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              custom={i}
              whileHover={{
                scale: 1.08,
                y: -12,
                transition: { type: "spring", stiffness: 400, damping: 15 },
              }}
              className="group relative rounded-full p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 overflow-visible  aspect-square flex flex-col items-center text-center"
              style={{ background: p.gradient }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-full" />

              <div className="relative z-10 mb-3 mt-2">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <p.icon className="w-16 h-16 text-white" strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                {p.title}
              </h3>

              <div className="relative z-10 px-4 mb-3 max-h-24 overflow-y-auto">
                <p className="text-white/90 text-xs leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <ul className="space-y-1.5 relative z-10 w-full px-2">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center justify-center gap-2 text-xs text-white/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
