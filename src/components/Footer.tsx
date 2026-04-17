import { FlaskConical } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (   
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="gradient-primary rounded-lg p-2">
                <FlaskConical className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-primary-foreground">PRAVI</span>
            </div>
            <p className="text-sm text-primary-foreground/50 leading-relaxed">
              Delivering trusted biotechnology solutions with a strong focus on quality, sustainability, and customer satisfaction.
            </p>
          </div>

          {[
            { 
              title: "Quick Links", 
              links: [
                { label: "Home", id: "home" }, 
                { label: "About", id: "about" }, 
                { label: "Products", id: "products" }, 
                { label: "Research", id: "research" }
              ] 
            },
            { 
              title: "Company", 
              links: [
                { label: "Quality", id: "quality" }, 
                { label: "Products", id: "products" }, 
                { label: "Contact", id: "contact" }, 
                { label: "Sustainability", id: "research" }
              ] 
            }
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-primary-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Pravi Bio Technologies. Built on trust, driven by science.
          </p>
          <div className="flex gap-4">
            {["LinkedIn", "Twitter", "Facebook"].map((s) => (
              <a key={s} href="#" className="text-xs text-primary-foreground/40 hover:text-secondary transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-[10px] text-primary-foreground/30">Developed by RajYug IT Solutions & private limited</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;