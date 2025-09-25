import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  language: 'es' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const text = {
    es: {
      company: "Bowl Collection",
      description: "Creamos bowls excepcionales que combinan funcionalidad y belleza para elevar tu experiencia culinaria.",
      quickLinks: "Enlaces rápidos",
      contact: "Contacto",
      followUs: "Síguenos",
      rights: "Todos los derechos reservados.",
      links: {
        home: "Inicio",
        products: "Productos",
        collections: "Colecciones",
        about: "Acerca de",
        privacy: "Privacidad",
        terms: "Términos"
      },
      contactInfo: {
        email: "hola@bowlcollection.com",
        phone: "+34 123 456 789",
        address: "Madrid, España"
      }
    },
    en: {
      company: "Bowl Collection",
      description: "We create exceptional bowls that combine functionality and beauty to elevate your culinary experience.",
      quickLinks: "Quick Links",
      contact: "Contact",
      followUs: "Follow Us",
      rights: "All rights reserved.",
      links: {
        home: "Home",
        products: "Products", 
        collections: "Collections",
        about: "About",
        privacy: "Privacy",
        terms: "Terms"
      },
      contactInfo: {
        email: "hello@bowlcollection.com",
        phone: "+1 (555) 123-4567",
        address: "New York, USA"
      }
    }
  };

  const currentText = text[language];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {currentText.company}<span className="text-primary">.</span>
              </h3>
              <p className="text-background/70 leading-relaxed max-w-md">
                {currentText.description}
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">{currentText.followUs}</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">{currentText.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-background/70 hover:text-background transition-colors duration-300"
                >
                  {currentText.links.home}
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  className="text-background/70 hover:text-background transition-colors duration-300"
                >
                  {currentText.links.products}
                </a>
              </li>
              <li>
                <a 
                  href="#collections" 
                  className="text-background/70 hover:text-background transition-colors duration-300"
                >
                  {currentText.links.collections}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-background/70 hover:text-background transition-colors duration-300"
                >
                  {currentText.links.about}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6">{currentText.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href={`mailto:${currentText.contactInfo.email}`}
                  className="text-background/70 hover:text-background transition-colors duration-300"
                >
                  {currentText.contactInfo.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a 
                  href={`tel:${currentText.contactInfo.phone}`}
                  className="text-background/70 hover:text-background transition-colors duration-300"
                >
                  {currentText.contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-background/70">
                  {currentText.contactInfo.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 {currentText.company}. {currentText.rights}
            </p>
            <div className="flex space-x-6 text-sm">
              <a 
                href="#" 
                className="text-background/60 hover:text-background transition-colors duration-300"
              >
                {currentText.links.privacy}
              </a>
              <a 
                href="#" 
                className="text-background/60 hover:text-background transition-colors duration-300"
              >
                {currentText.links.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;