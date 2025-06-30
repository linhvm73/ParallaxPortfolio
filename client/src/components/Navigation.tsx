import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "#home", label: "TRANG CHỦ" },
    { href: "#about", label: "VỀ TÔI" },
    { href: "#services", label: "DỊCH VỤ" },
    { href: "#portfolio", label: "PORTFOLIO" },
    { href: "#contact", label: "LIÊN HỆ" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glassmorphism-bg border-b border-white/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-playfair text-2xl font-semibold text-foreground cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              VŨ THỊ MỸ LINH
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium hover:text-accent transition-colors text-spacing"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed inset-0 z-40 bg-background md:hidden"
      >
        <div className="pt-20 px-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.href}
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0, 
                x: isMenuOpen ? 0 : 50 
              }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left py-4 text-lg font-medium hover:text-accent transition-colors"
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
