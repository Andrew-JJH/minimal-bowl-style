import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bowlCollection from "@/assets/bowl-collection.jpg";

interface CollectionsProps {
  language: 'es' | 'en';
}

const Collections = ({ language }: CollectionsProps) => {
  const text = {
    es: {
      title: "Colecciones Especiales",
      subtitle: "Cada colección cuenta una historia única",
      collections: [
        {
          name: "Minimalista",
          description: "Líneas limpias y formas puras para los amantes del diseño simple y elegante.",
          features: ["Diseño atemporal", "Colores neutros", "Versatilidad máxima"]
        },
        {
          name: "Colorida",
          description: "Bowls vibrantes que añaden personalidad y alegría a cualquier comida.",
          features: ["Colores vibrantes", "Acabados únicos", "Expresión personal"]
        },
        {
          name: "Clásica",
          description: "Inspirada en la tradición artesanal, perfecta para ocasiones especiales.",
          features: ["Técnicas tradicionales", "Acabados premium", "Elegancia intemporal"]
        }
      ],
      exploreCollection: "Explorar colección"
    },
    en: {
      title: "Special Collections",
      subtitle: "Each collection tells a unique story",
      collections: [
        {
          name: "Minimalist",
          description: "Clean lines and pure forms for lovers of simple and elegant design.",
          features: ["Timeless design", "Neutral colors", "Maximum versatility"]
        },
        {
          name: "Colorful",
          description: "Vibrant bowls that add personality and joy to any meal.",
          features: ["Vibrant colors", "Unique finishes", "Personal expression"]
        },
        {
          name: "Classic",
          description: "Inspired by artisanal tradition, perfect for special occasions.",
          features: ["Traditional techniques", "Premium finishes", "Timeless elegance"]
        }
      ],
      exploreCollection: "Explore collection"
    }
  };

  const currentText = text[language];

  return (
    <section id="collections" className="py-20 bg-collection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6 tracking-tight">
            {currentText.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {currentText.subtitle}
          </p>
        </div>

        {/* Featured Collection Image */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <img 
              src={bowlCollection} 
              alt="Bowl collection showcase"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {currentText.collections[0].name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {currentText.collections[0].description}
                </p>
                <Button variant="default" className="group">
                  {currentText.exploreCollection}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentText.collections.map((collection, index) => (
            <div 
              key={index}
              className="group bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50"
            >
              <div className="space-y-6">
                {/* Collection Icon/Number */}
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{index + 1}</span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {collection.name}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {collection.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {collection.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button variant="ghost" className="group/btn p-0 h-auto font-medium">
                  {currentText.exploreCollection}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;