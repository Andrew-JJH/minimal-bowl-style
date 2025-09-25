import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";

interface NavbarProps {
  language: 'es' | 'en';
  onLanguageChange: (lang: 'es' | 'en') => void;
}

const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const text = {
    es: {
      home: "Inicio",
      products: "Productos", 
      collections: "Colecciones",
      cta: "Comprar ahora"
    },
    en: {
      home: "Home",
      products: "Products",
      collections: "Collections", 
      cta: "Shop now"
    }
  };

  const currentText = text[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-foreground tracking-tight">
              Bowl<span className="text-primary">.</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#home" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {currentText.home}
              </a>
              <a 
                href="#products" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {currentText.products}
              </a>
              <a 
                href="#collections" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {currentText.collections}
              </a>
            </div>
          </div>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <button
                onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </div>
            <Button variant="hero">
              {currentText.cta}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border mt-2">
              <a 
                href="#home" 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {currentText.home}
              </a>
              <a 
                href="#products" 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {currentText.products}
              </a>
              <a 
                href="#collections" 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {currentText.collections}
              </a>
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <button
                    onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {language === 'es' ? 'EN' : 'ES'}
                  </button>
                </div>
                <Button variant="hero" size="sm">
                  {currentText.cta}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;