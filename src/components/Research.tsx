import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Microscope,
  Dna,
  Brain,
  BarChart3,
  Beaker,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
} from "lucide-react";

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
    bgImage: advancedLabsImg,
  },
  {
    icon: Dna,
    title: "Reuse Resources",
    desc: "Innovative formulations designed to enable reuse of materials and by-products, supporting sustainable operations.",
    bgImage: genomicsImg,
  },
  {
    icon: Brain,
    title: "Recycle Processes",
    desc: "Advanced processing techniques that support recycling and reduce environmental impact in production systems.",
    bgImage: aiDrivenImg,
  },
  {
    icon: BarChart3,
    title: "Sustainable Growth",
    desc: "Helping businesses grow responsibly by improving efficiency, reducing costs, and maintaining eco-friendly practices.",
    bgImage: clinicalTrialsImg,
  },
  {
    icon: Beaker,
    title: "Efficient Production",
    desc: "Cost-effective and scalable production solutions ensuring consistent quality with minimal environmental impact.",
    bgImage: fermentationImg,
  },
  {
    icon: ShieldCheck,
    title: "Quality & Trust",
    desc: "Committed to delivering reliable products with a focus on safety, performance, and customer satisfaction.",
    bgImage: ipPatentsImg,
  },
];

const Research = () => {
  const ref = useRef(null);
  const scrollContainerRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollInterval = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const smoothEase = [0.25, 0.1, 0.25, 1];
  const cardWidth = 380; // Width of each card in pixels
  const gap = 32; // Gap between cards in pixels
  const totalCardWidth = cardWidth + gap;

  // Create 5 copies for seamless infinite scroll
  const duplicatedCapabilities = [
    ...capabilities,
    ...capabilities,
    ...capabilities,
    ...capabilities,
    ...capabilities,
  ];
  const originalLength = capabilities.length;
  const startPosition = totalCardWidth * (originalLength * 2); // Start at the middle copy

  // Initialize scroll position to the middle
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = startPosition;
    }
  }, []);

  const scrollCards = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const newScrollLeft = container.scrollLeft + direction * totalCardWidth;
    container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  const scrollToCard = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = startPosition + totalCardWidth * index;
    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  const startAutoScroll = () => {
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    autoScrollInterval.current = setInterval(() => {
      const container = scrollContainerRef.current;
      if (container && isAutoScrolling) {
        const newScrollLeft = container.scrollLeft + totalCardWidth;
        container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      }
    }, 3000); // Changed from 1000ms to 3000ms for slower auto-scrolling
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
    if (!isAutoScrolling) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
  };

  useEffect(() => {
    if (inView && isAutoScrolling) {
      startAutoScroll();
    }
    return () => stopAutoScroll();
  }, [inView, isAutoScrolling]);

  // Handle scroll to reset position for infinite effect
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const minScroll = 0;

    // Calculate the effective index for the indicator
    const relativeScroll = scrollLeft - startPosition;
    const rawIndex = Math.round(relativeScroll / totalCardWidth);
    let newIndex = rawIndex % originalLength;
    if (newIndex < 0) newIndex += originalLength;
    setCurrentIndex(newIndex);

    // Reset position when reaching the edges for seamless infinite scroll
    if (scrollLeft >= maxScroll - totalCardWidth) {
      // At the end, jump back to the middle section
      const newPosition = startPosition + totalCardWidth;
      container.scrollLeft = newPosition;
    } else if (scrollLeft <= minScroll + totalCardWidth) {
      // At the beginning, jump to the middle section
      const newPosition = startPosition - totalCardWidth;
      container.scrollLeft = newPosition;
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    if (isAutoScrolling) stopAutoScroll();
  };

  const handleMouseLeave = () => {
    if (isAutoScrolling) startAutoScroll();
  };

  return (
    <section
      id="research"
      className="py-10 bg-muted/50 relative overflow-hidden"
      ref={ref}
    >
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
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}
              Sustainable Future
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.7, ease: smoothEase }}
            className="text-muted-foreground mt-5 max-w-2xl mx-auto text-lg"
          >
            We focus on Reduce, Reuse, and Recycle principles to deliver
            eco-friendly biotechnology solutions that support sustainable
            business growth.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="relative overflow-hidden py-8">
          {/* Auto-scroll Toggle Button */}
          <button
            type="button"
            onClick={toggleAutoScroll}
            className="absolute top-0 right-4 z-30 h-10 w-10 rounded-full bg-primary/20 text-primary shadow-lg transition hover:bg-primary/30 flex items-center justify-center backdrop-blur-sm"
            aria-label={
              isAutoScrolling ? "Pause auto-scroll" : "Start auto-scroll"
            }
          >
            {isAutoScrolling ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => scrollCards(-1)}
            className="absolute left-3 top-1/2 z-20 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:bg-white md:flex"
            aria-label="Previous"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => scrollCards(1)}
            className="absolute right-3 top-1/2 z-20 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:bg-white md:flex"
            aria-label="Next"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollContainerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex gap-6 md:gap-8 items-stretch overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
            style={{
              scrollSnapType: "x mandatory",
              overflowX: "auto",
              scrollBehavior: "smooth",
            }}
          >
            {duplicatedCapabilities.map((c, idx) => {
              const originalIndex = idx % capabilities.length;
              return (
                <motion.div
                  key={`${c.title}-${idx}`}
                  onMouseEnter={() => setActiveIndex(originalIndex)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className="flex-shrink-0 w-[280px] md:w-[340px] min-h-[320px] bg-transparent border border-slate-800/80 p-5 md:p-6 shadow-2xl shadow-black/10 backdrop-blur-xl relative overflow-hidden group cursor-pointer rounded-2xl"
                  style={{ scrollSnapAlign: "center" }}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: originalIndex * 0.1,
                    ease: smoothEase,
                  }}
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
                      <h4 className="font-bold text-white text-xl md:text-2xl">
                        {c.title}
                      </h4>
                      <p className="text-sm text-white/80 mt-2 max-w-[280px]">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {capabilities.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "bg-primary w-8"
                  : "bg-primary/30 hover:bg-primary/60 w-6"
              }`}
              aria-label={`Go to card ${idx + 1}`}
            />
          ))}
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
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Research;
