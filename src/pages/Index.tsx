import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Collections from "@/components/Collections";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero language={language} />
        <Products language={language} />
        <Collections language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
