
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import JoinServer from "../components/JoinServer";
import Footer from "../components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

const Index = () => {
  const { language } = useLanguage();
  
  // Update page title when language changes
  useEffect(() => {
    document.title = language === 'en' ? 'FiveM Server - Advanced Roleplay' : 'FiveM Szerver - Fejlett Szerepjáték';
  }, [language]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <JoinServer />
      <Footer />
    </div>
  );
};

export default Index;
