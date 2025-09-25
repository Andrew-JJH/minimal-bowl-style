import ProductCard from "./ProductCard";
import bowlWhite from "@/assets/bowl-white.jpg";
import bowlBlue from "@/assets/bowl-blue.jpg";
import bowlOrange from "@/assets/bowl-orange.jpg";

interface ProductsProps {
  language: 'es' | 'en';
}

const Products = ({ language }: ProductsProps) => {
  const text = {
    es: {
      title: "Nuestra Colección",
      subtitle: "Descubre bowls únicos diseñados para elevar tu experiencia culinaria",
      products: [
        {
          name: "Bowl Minimalista Blanco",
          description: "Elegante bowl de cerámica blanca, perfecto para cualquier ocasión. Su diseño atemporal complementa cualquier mesa.",
          features: ["Food grade", "Apto microondas", "Apto lavavajillas"]
        },
        {
          name: "Bowl Azul Océano",
          description: "Inspirado en las profundidades del océano, este bowl aporta serenidad y estilo a tu cocina.",
          features: ["Food grade", "Apto horno", "Resistente"]
        },
        {
          name: "Bowl Naranja Vibrante",
          description: "Dale vida a tu mesa con este bowl de color vibrante que combina funcionalidad y personalidad.",
          features: ["Food grade", "Apto microondas", "Artesanal"]
        }
      ]
    },
    en: {
      title: "Our Collection",
      subtitle: "Discover unique bowls designed to elevate your culinary experience",
      products: [
        {
          name: "Minimalist White Bowl",
          description: "Elegant white ceramic bowl, perfect for any occasion. Its timeless design complements any table.",
          features: ["Food grade", "Microwave safe", "Dishwasher safe"]
        },
        {
          name: "Ocean Blue Bowl", 
          description: "Inspired by ocean depths, this bowl brings serenity and style to your kitchen.",
          features: ["Food grade", "Oven safe", "Durable"]
        },
        {
          name: "Vibrant Orange Bowl",
          description: "Bring life to your table with this vibrant colored bowl that combines functionality and personality.",
          features: ["Food grade", "Microwave safe", "Handcrafted"]
        }
      ]
    }
  };

  const currentText = text[language];
  const images = [bowlWhite, bowlBlue, bowlOrange];
  const prices = ["$24.99", "$27.99", "$22.99"];
  const originalPrices = [undefined, undefined, "$26.99"];

  return (
    <section id="products" className="py-20 bg-product">
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentText.products.map((product, index) => (
            <ProductCard
              key={index}
              image={images[index]}
              name={product.name}
              price={prices[index]}
              originalPrice={originalPrices[index]}
              description={product.description}
              features={product.features}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;