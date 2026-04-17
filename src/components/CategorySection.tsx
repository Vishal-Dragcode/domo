import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Sprout, Fish, Bird, Dog, Flower2, Droplets } from "lucide-react";

import agricultureImg from "../assets/agriculture.png";
import aquacultureImg from "../assets/aquaculture.jpg";
import poultryImg from "../assets/poultry.png";
import animalHealthImg from "../assets/animal-health.jpeg";
import horticultureImg from "../assets/horticulture.jpg";
import dairyImg from "../assets/dairy.jpg";

const categories = [
  {
    id: 1,
    name: "AGRICULTURE",
    icon: Sprout,
    image: agricultureImg,
    description: "Sustainable crop solutions",
    color: "from-emerald-600 to-green-500",
    bgColor: "bg-emerald-50",
    iconColor: "#059669",
    whatsappLink: "https://wa.me/1234567890?text=Hello%2C%20I%20need%20PRAVI%20agriculture%20solutions",
  },
  {
    id: 2,
    name: "AQUACULTURE",
    icon: Fish,
    image: aquacultureImg,
    description: "Aquatic health & productivity",
    color: "from-blue-600 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "#2563EB",
    whatsappLink: "https://wa.me/1234567890?text=Hello%2C%20I%20need%20PRAVI%20aquaculture%20solutions",
  },
  {
    id: 3,
    name: "POULTRY",
    icon: Bird,
    image: poultryImg,
    description: "Efficient poultry nutrition",
    color: "from-amber-600 to-orange-500",
    bgColor: "bg-amber-50",
    iconColor: "#D97706",
    whatsappLink: "https://wa.me/1234567890?text=Hello%2C%20I%20need%20PRAVI%20poultry%20solutions",
  },
  {
    id: 4,
    name: "ANIMAL HEALTH",
    icon: Dog,
    image: animalHealthImg,
    description: "Livestock care & performance",
    color: "from-rose-600 to-pink-500",
    bgColor: "bg-rose-50",
    iconColor: "#E11D48",
    whatsappLink: "https://wa.me/1234567890?text=Hello%2C%20I%20need%20PRAVI%20animal%20health%20solutions",
  },
  {
    id: 5,
    name: "HORTICULTURE",
    icon: Flower2,
    image: horticultureImg,
    description: "Fruit & vegetable enhancement",
    color: "from-purple-600 to-violet-500",
    bgColor: "bg-purple-50",
    iconColor: "#9333EA",
    whatsappLink: "https://wa.me/1234567890?text=Hello%2C%20I%20need%20PRAVI%20horticulture%20solutions",
  },
  {
    id: 6,
    name: "DAIRY",
    icon: Droplets,
    image: dairyImg,
    description: "Improving milk productivity",
    color: "from-sky-600 to-blue-500",
    bgColor: "bg-sky-50",
    iconColor: "#0284C7",
    whatsappLink: "https://wa.me/1234567890?text=Hello%2C%20I%20need%20PRAVI%20dairy%20solutions",
  },
];

const CategorySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const openWhatsApp = (link: string) => {
    window.open(link, "_blank");
  };

  const activeCategory = categories[activeIndex];
  const ActiveIcon = activeCategory.icon;

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-br from-white via-emerald-50/30 to-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-5 py-2 rounded-full shadow-lg shadow-emerald-200 mb-4"
          >
            <Sprout size={16} />
            <span className="text-sm font-semibold tracking-wide">✦ Our Solutions ✦</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Sustainable Solutions for{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Every Industry
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Supporting businesses with eco-friendly biotechnology products focused on efficiency, safety, and sustainability.
          </motion.p>
        </motion.div>

        <div className="relative max-w-[80%] mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={activeCategory.image}
              alt={activeCategory.name}
              className="w-full h-[500px] md:h-[600px] object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-14 h-14 rounded-full ${activeCategory.bgColor} flex items-center justify-center shadow-lg`}>
                  <ActiveIcon className="w-7 h-7" style={{ color: activeCategory.iconColor }} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold">
                    {activeCategory.name}
                  </h3>
                  <p className="text-white/80 text-base mt-1">
                    {activeCategory.description}
                  </p>
                </div>
              </div>
              
              <p className="text-white/90 text-lg max-w-2xl mb-6">
                Advanced biotechnology solutions designed to support sustainable growth, improve productivity, and ensure quality across the {activeCategory.name.toLowerCase()} sector.
              </p>
              
              <motion.button
                whileHover={{ x: 5 }}
                onClick={() => openWhatsApp(activeCategory.whatsappLink)}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg"
              >
                <span>WhatsApp us</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-emerald-50 transition-all duration-300">
            <ChevronLeft className="w-6 h-6 text-emerald-600" />
          </button>
          
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-emerald-50 transition-all duration-300">
            <ChevronRight className="w-6 h-6 text-emerald-600" />
          </button>

          <div className="flex justify-center gap-3 mt-6">
            {categories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-8 h-2 bg-emerald-600 rounded-full"
                    : "w-2 h-2 bg-gray-300 rounded-full hover:bg-emerald-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="max-w-[80%] mx-auto mt-8">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category, idx) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveIndex(idx)}
                whileHover={{ scale: 1.05 }}
                className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                  activeIndex === idx ? "ring-4 ring-emerald-500 shadow-lg" : "opacity-70 hover:opacity-100"
                }`}
              >
                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1 }}
          className="text-center mt-12"
        >
          <p className="text-emerald-600 text-sm flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-emerald-300 inline-block" />
            Build your business with sustainability
            <span className="w-8 h-px bg-emerald-300 inline-block" />
          </p>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CategorySection;