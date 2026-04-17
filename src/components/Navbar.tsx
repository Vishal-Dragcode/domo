import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
const navLinks = ["Home", "About", "Products", "Research", "Quality", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-4 lg:px-8">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="PRAVI Logo" 
            className="h-10 w-auto object-contain"
          />
          <div className="flex flex-col items-start">
            <span className={`text-xl font-bold transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}>
              PRAIVI
            </span>
            <span className={`text-1xl font-medium transition-colors duration-300 ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>
              
            </span>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full ${
                scrolled ? "text-muted-foreground hover:text-primary" : "text-white hover:text-primary"
              }`}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="gradient-primary text-primary-foreground px-5 py-1.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </button>
        </div>

        <button 
          className={`md:hidden transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`} 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className={`text-sm font-medium py-2 text-left transition-colors ${
                    scrolled ? "text-muted-foreground hover:text-primary" : "text-white hover:text-primary"
                  }`}
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;