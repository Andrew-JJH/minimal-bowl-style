import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  language: 'es' | 'en';
}

const ProductCard = ({ image, name, price, originalPrice, description, features, language }: ProductCardProps) => {
  const text = {
    es: {
      viewDetails: "Ver detalles",
      addToCart: "Añadir",
      specialOffer: "Oferta especial"
    },
    en: {
      viewDetails: "View details", 
      addToCart: "Add to cart",
      specialOffer: "Special offer"
    }
  };

  const currentText = text[language];

  return (
    <div className="group bg-product-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted/30">
        <img 
          src={image} 
          alt={name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Button variant="outline" size="sm" className="bg-background/90">
            <Eye className="w-4 h-4 mr-2" />
            {currentText.viewDetails}
          </Button>
        </div>

        {/* Special offer badge */}
        {originalPrice && (
          <div className="absolute top-4 left-4">
            <Badge variant="destructive" className="bg-primary text-primary-foreground">
              {currentText.specialOffer}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs font-normal">
              {feature}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Price and Actions */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">{price}</span>
            {originalPrice && (
              <span className="text-lg text-muted-foreground line-through">{originalPrice}</span>
            )}
          </div>
          
          <Button variant="minimal" size="sm" className="group/btn">
            <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;