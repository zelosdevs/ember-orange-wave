
import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const { t } = useLanguage();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-fivem-gray-dark py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-fivem-orange to-fivem-orange-dark"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-fivem-orange opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-fivem-orange-dark opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold gradient-text mb-6">FiveM Server</h3>
            <p className="text-gray-400 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-fivem-gray-light rounded-full flex items-center justify-center hover:bg-fivem-orange transition-colors duration-300">
                <span className="text-lg">📱</span>
              </a>
              <a href="#" className="w-10 h-10 bg-fivem-gray-light rounded-full flex items-center justify-center hover:bg-fivem-orange transition-colors duration-300">
                <span className="text-lg">💬</span>
              </a>
              <a href="#" className="w-10 h-10 bg-fivem-gray-light rounded-full flex items-center justify-center hover:bg-fivem-orange transition-colors duration-300">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-fivem-gray-light rounded-full flex items-center justify-center hover:bg-fivem-orange transition-colors duration-300">
                <span className="text-lg">🎮</span>
              </a>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-bold text-white mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-fivem-orange transition-colors duration-300">{t('footer.home')}</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-fivem-orange transition-colors duration-300">{t('footer.features')}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-fivem-orange transition-colors duration-300">{t('footer.about')}</a></li>
              <li><a href="#join" className="text-gray-400 hover:text-fivem-orange transition-colors duration-300">{t('footer.joinServer')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-fivem-orange transition-colors duration-300">{t('footer.rules')}</a></li>
            </ul>
          </div>

          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-bold text-white mb-6">{t('footer.resources')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-fivem-orange transition-colors duration-300">{t('footer.discordServer')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-fivem-orange transition-colors duration-300">{t('footer.donationStore')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-fivem-orange transition-colors duration-300">{t('footer.serverRules')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-fivem-orange transition-colors duration-300">{t('footer.communityForum')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-fivem-orange transition-colors duration-300">{t('footer.developmentBlog')}</a></li>
            </ul>
          </div>

          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-bold text-white mb-6">{t('footer.contactUs')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-fivem-orange">📧</span>
                <a href="mailto:info@yourserver.com" className="text-gray-400 hover:text-fivem-orange transition-colors duration-300">info@yourserver.com</a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-fivem-orange">🌐</span>
                <a href="#" className="text-gray-400 hover:text-fivem-orange transition-colors duration-300">www.yourserver.com</a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-fivem-orange">💬</span>
                <a href="#" className="text-gray-400 hover:text-fivem-orange transition-colors duration-300">{t('footer.joinDiscord')}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-gray-400">
            &copy; {currentYear} Your FiveM Server. {t('footer.rights')}
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-fivem-orange transition-colors duration-300">{t('footer.privacyPolicy')}</a>
            <a href="#" className="text-gray-400 hover:text-fivem-orange transition-colors duration-300">{t('footer.termsOfService')}</a>
            <a href="#" className="text-gray-400 hover:text-fivem-orange transition-colors duration-300">{t('footer.cookiePolicy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
