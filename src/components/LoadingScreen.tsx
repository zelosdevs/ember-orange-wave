
import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Loader } from 'lucide-react';

const LoadingScreen = () => {
  const { t } = useLanguage();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showScreen, setShowScreen] = useState(true);

  useEffect(() => {
    // Blur the background when loading screen is shown
    document.body.classList.add('overflow-hidden');
    
    const timer = setTimeout(() => {
      setShowScreen(false);
      document.body.classList.remove('overflow-hidden');
    }, 3000);

    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  if (!showScreen) return null;

  return (
    <>
      {/* Blurred background overlay */}
      <div className="fixed inset-0 z-40 backdrop-blur-md bg-fivem-gray-dark/70"></div>
      
      {/* Loading content */}
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
        <div className="w-full max-w-md flex flex-col items-center gap-8">
          <div className="text-4xl md:text-5xl font-bold gradient-text">
            FiveM Server
          </div>
          
          <div className="relative w-full h-2 bg-fivem-gray-light rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full orange-gradient rounded-full transition-all duration-300" 
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          
          <div className="flex items-center gap-3 text-white">
            <Loader size={24} className="text-fivem-orange animate-spin" />
            <p className="text-lg">{t('loading.message')}</p>
          </div>
          
          <div className="text-sm text-gray-400 mt-8">
            {Math.floor(loadingProgress)}%
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
