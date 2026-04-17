import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Award, FileCheck, Leaf, Eye, ChevronRight } from "lucide-react";

import isoImage from "../assets/iso-image.jpg";
import gmpImage from "../assets/gmp-image.jpg";
import iso14001Image from "../assets/iso14001-image.jpeg";
import fssaiImage from "../assets/fssai-image.png";

const certs = [
  {
    id: 0,
    icon: ShieldCheck,
    title: "Sustainable Approach",
    subtitle: "Reduce • Reuse • Recycle",
    desc: "We focus on minimizing waste, reusing resources, and promoting eco-friendly practices to support sustainable growth for businesses and the environment.",
    color: "#059669",
    image: isoImage,
    position: "left",
  },
  {
    id: 1,
    icon: Award,
    title: "Reliable Products",
    subtitle: "Consistent Quality",
    desc: "Our products are designed to deliver consistent performance and reliability, helping industries achieve better results with confidence.",
    color: "#059669",
    image: gmpImage,
    position: "right",
  },
  {
    id: 2,
    icon: FileCheck,
    title: "Business Growth",
    subtitle: "Build with Sustainability",
    desc: "We support businesses with solutions that improve efficiency, reduce costs, and promote long-term sustainable growth.",
    color: "#059669",
    image: iso14001Image,
    position: "left",
  },
  {
    id: 3,
    icon: Leaf,
    title: "Customer Satisfaction",
    subtitle: "Our Core Value",
    desc: "A satisfied customer is our greatest asset. We are committed to delivering trust, value, and long-term relationships through our products.",
    color: "#059669",
    image: fssaiImage,
    position: "right",
  },
];

const Quality = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  const certRefs = certs.map(() => useRef(null));
  const certsInView = certRefs.map((certRef) =>
    useInView(certRef, { once: false, margin: "-100px" })
  );

  const slideFromLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  return (
    <section id="quality" ref={ref} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
            <ShieldCheck size={16} className="text-emerald-600" />
          </div>
          <span className="text-emerald-600 text-sm font-medium tracking-wide">
            Our Commitment
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <Eye size={20} className="text-emerald-600" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              SUSTAINABILITY & TRUST
            </h2>
          </div>
          <div className="w-12 h-0.5 bg-emerald-500 rounded-full mx-auto" />
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Focused on sustainability, quality, and customer satisfaction in everything we deliver
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-16 md:space-y-24 mt-16">
          {certs.map((cert, idx) => (
            <div
              key={cert.id}
              ref={certRefs[idx]}
              className={`flex flex-col ${
                cert.position === "left" ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center`}
            >
              {/* Image */}
              <motion.div
                initial="hidden"
                animate={certsInView[idx] ? "visible" : "hidden"}
                variants={cert.position === "left" ? slideFromRight : slideFromLeft}
                className="w-full md:w-1/2"
              >
                <div className="relative overflow-hidden shadow-lg group shadow-xl">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial="hidden"
                animate={certsInView[idx] ? "visible" : "hidden"}
                variants={cert.position === "left" ? slideFromLeft : slideFromRight}
                className="w-full md:w-1/2"
              >
                <div className="relative md:pl-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <cert.icon size={24} className="text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                        {cert.title}
                      </h3>
                      <p className="text-emerald-600 text-sm font-medium">
                        {cert.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="w-10 h-0.5 bg-emerald-400 rounded-full mb-4" />

                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {cert.desc}
                  </p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-1 text-emerald-600 text-sm font-medium group"
                  >
                    Learn more
                    <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Leaf size={16} />
            <span>A Satisfied Customer Is Our Asset</span>
            <Leaf size={16} />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Quality;