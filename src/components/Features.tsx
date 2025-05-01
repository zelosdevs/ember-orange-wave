
import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const features = document.querySelectorAll('.feature-card');
            features.forEach((feature, index) => {
              setTimeout(() => {
                feature.classList.add('animate-fade-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const featuresList = [
    {
      title: "customEconomy",
      description: "economyDesc",
      icon: "💰",
    },
    {
      title: "customVehicles",
      description: "vehiclesDesc",
      icon: "🚗",
    },
    {
      title: "roleplayFocus",
      description: "roleplayDesc",
      icon: "🎭",
    },
    {
      title: "activeStaff",
      description: "staffDesc",
      icon: "👮",
    },
    {
      title: "regularEvents",
      description: "eventsDesc",
      icon: "🎉",
    },
    {
      title: "customInteriors",
      description: "interiorsDesc",
      icon: "🏢",
    },
  ];
  
  return (
    <section id="features" className="section-padding bg-fivem-gray-dark" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t('features.title')}</span>
          </h2>
          <p className="text-gray-300">
            {t('features.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index}
              className="feature-card opacity-0 bg-fivem-gray-light p-6 rounded-lg border border-fivem-orange/20 hover:border-fivem-orange/60 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-4 text-4xl bg-gradient-to-br from-fivem-orange to-fivem-orange-dark w-16 h-16 flex items-center justify-center rounded-lg shadow-lg group-hover:animate-pulse-orange">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{t(`features.${feature.title}`)}</h3>
              <p className="text-gray-300">{t(`features.${feature.description}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
