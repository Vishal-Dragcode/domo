import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CategorySection from "@/components/CategorySection"; // Add this import
import Products from "@/components/Products";
import Research from "@/components/Research";
import Quality from "@/components/Quality";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <CategorySection /> {/* Add this line */}
    <Products />
    <Research />
    <Quality />
    <WhyChooseUs />
    <Contact />
    <Footer />
  </div>
);

export default Index;