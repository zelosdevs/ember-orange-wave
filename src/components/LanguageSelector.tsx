
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Flag } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/us.png', alt: 'US Flag' },
    { code: 'hu', name: 'Magyar', flag: 'https://flagcdn.com/w20/hu.png', alt: 'Hungarian Flag' }
  ];

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
  };

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button 
          className="flex items-center justify-center p-2 text-white hover:text-fivem-orange transition-colors duration-300"
          aria-label="Select language"
        >
          <div className="flex items-center gap-1">
            <Flag size={16} className="mr-1" />
            <img src={currentLang?.flag} alt={currentLang?.alt} className="w-5 h-auto" />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-fivem-gray-light border border-fivem-gray-dark">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code}
            className={`flex items-center gap-2 cursor-pointer hover:bg-fivem-gray-dark ${
              language === lang.code ? 'text-fivem-orange' : 'text-white'
            }`}
            onClick={() => handleLanguageChange(lang.code as Language)}
          >
            <img src={lang.flag} alt={lang.alt} className="w-5 h-auto" />
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
