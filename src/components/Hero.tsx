import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBowl from "@/assets/hero-bowl.jpg";

interface HeroProps {
  language: 'es' | 'en';
}

const Hero = ({ language }: HeroProps) => {
  const text = {
    es: {
      title: "Bowl Collection",
      subtitle: "Explora nuestra colección de bowls que combina estilo y practicidad, perfectos para cualquier mesa.",
      cta: "Explorar Colección"
    },
    en: {
      title: "Bowl Collection",
      subtitle: "Explore our bowl collection that combines style and practicality, perfect for any table.",
      cta: "Explore Collection"
    }
  };

  const currentText = text[language];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-light text-hero-foreground tracking-tight leading-tight">
                {currentText.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                {currentText.subtitle}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" className="group">
                {currentText.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroBowl} 
                alt="Elegant ceramic bowl collection"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Premium Quality
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-border">
              Handcrafted
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;