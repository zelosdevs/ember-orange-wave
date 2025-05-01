
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-fivem-gray-dark/90 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold gradient-text">
          FiveM Server
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#home" className="nav-link text-white hover:text-fivem-orange transition-colors duration-300">{t('navbar.home')}</a>
          <a href="#features" className="nav-link text-white hover:text-fivem-orange transition-colors duration-300">{t('navbar.features')}</a>
          <a href="#about" className="nav-link text-white hover:text-fivem-orange transition-colors duration-300">{t('navbar.about')}</a>
          <a href="#join" className="nav-link text-white hover:text-fivem-orange transition-colors duration-300">{t('navbar.joinUs')}</a>
        </div>

        {/* Right Section with Language and CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <LanguageSelector />
          <Button 
            className="orange-gradient text-white font-medium px-6 py-2 rounded-md hover:brightness-110 transition-all duration-300"
          >
            {t('navbar.connectNow')}
          </Button>
        </div>

        {/* Mobile menu button and Language selector */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSelector />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-fivem-gray-dark/95 backdrop-blur-md animate-slide-in shadow-lg">
          <div className="flex flex-col py-4 px-4">
            <a 
              href="#home" 
              className="py-3 text-white hover:text-fivem-orange transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('navbar.home')}
            </a>
            <a 
              href="#features" 
              className="py-3 text-white hover:text-fivem-orange transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('navbar.features')}
            </a>
            <a 
              href="#about" 
              className="py-3 text-white hover:text-fivem-orange transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('navbar.about')}
            </a>
            <a 
              href="#join" 
              className="py-3 text-white hover:text-fivem-orange transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('navbar.joinUs')}
            </a>
            <Button 
              className="mt-4 orange-gradient text-white font-medium px-6 py-2 rounded-md hover:brightness-110 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {t('navbar.connectNow')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
