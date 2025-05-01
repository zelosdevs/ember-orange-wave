
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-fivem-gray-dark">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! Page not found</p>
        <a href="/" className="orange-gradient text-white font-medium px-6 py-2 rounded-md hover:brightness-110 transition-all duration-300 inline-block">
          {t('footer.home')}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
