import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "Services", href: "services" },
  { label: "Calculator", href: "calculator" },
  { label: "Resources", href: "resources" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false); // cerrar primero

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300); // esperar a que el menú se cierre
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-xl shadow-lg shadow-slate-900/5"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="cursor-pointer group flex items-center h-20"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => scrollToSection("home")}
          >
            <div className="relative">
              <img
                src="/cardenas-logo.jpg"
                alt="Logo Cardenas"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-slate-700 hover:text-blue-900 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-3/4"></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
  variant="ghost"
  className="text-slate-700 hover:text-blue-900 hover:bg-blue-50"
  onClick={() => scrollToSection("contact")}
>
  Apply Now
</Button>
<a href="tel:+18138208028">
  <Button className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 gap-2 shadow-lg hover:shadow-xl transition-all">
    <Phone className="w-4 h-4" />
    <span className="hidden xl:inline">+1 813-820-8028</span>
    <span className="xl:hidden">Call</span>
  </Button>
</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-700 hover:text-blue-900 transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div
              initial={false}
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-2xl"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 text-slate-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}

              <div className="pt-4 space-y-3 border-t border-slate-100 mt-4">
                <Button
  variant="outline"
  className="w-full"
  onClick={() => scrollToSection("contact")}
>
  Apply Now
</Button>
<a href="tel:+18138208028" className="block w-full">
  <Button className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 gap-2 shadow-lg">
    <Phone className="w-4 h-4" />
    <span>+1 (813) 820-8028</span>
  </Button>
</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrolled indicator line */}
      {isScrolled && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-900 to-transparent origin-left"
        />
      )}
    </motion.nav>
  );
}
